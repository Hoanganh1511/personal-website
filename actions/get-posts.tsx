import { client } from "@/libs/sanity.client";
import { IArticle } from "@/types/apiTypes";
import { groq } from "next-sanity";

export const ITEMS_PER_PAGE = 6;
interface IParams {
  category?: string;
  limit?: number;
}

const getAllArticle = async ({
  limit = 3,
  offset = 0,
}: {
  limit?: number;
  offset?: number;
}) => {
  const querySanity = groq`*[_type=="post"] ${
    limit ? `[${offset}...${limit}]` : ""
  } {
          ...,
          author->,
          categories[]->,
        } | order(_createdAt desc)`;

  const data = await client.fetch(querySanity);
  return {
    data: data as IArticle[],
  };
};
const getArticlesByCategory = async ({
  category,
  limit = 3,
  offset = 0,
}: {
  category?: string;
  limit?: number;
  offset?: number;
}) => {
  const queryAllBlogsWithCategorySanity = groq`*[_type=="post" && $category in categories[]->tag.current] {
          ...,
          author->,
          categories[]->,
          "category": *[_type == 'category' && tag.current == $category]
        } | order(_createdAt desc)`;
  const querySanity = groq`*[_type=="post" && $category in categories[]->tag.current] {
          ...,
          author->,
          categories[]->,
          "category": *[_type == 'category' && tag.current == $category]
        } | order(_createdAt desc) ${
          limit ? `[${offset}...${offset + limit}]` : ""
        }`;
  const allData = await client.fetch(queryAllBlogsWithCategorySanity, {
    category: category,
  });

  const data = await client.fetch(querySanity, {
    category: category,
  });

  if (!data.length) {
    return {
      data: [],
      total: allData?.length || 0,
      title: "",
      description: "",
    };
  }
  return {
    data: data as IArticle[],
    total: allData?.length || 0,
    title: data[0].category.title,
    description: data[0].category.description,
  };
};

const getDetailPost = async (id: string) => {
  const post = await client.fetch(
    groq`*[_type=="post" && slug.current == $id ][0]{
      ...,
    }`,
    { id },
    {
      //  cache: "cache",
    }
  );
  return post;
};
export { getAllArticle, getArticlesByCategory, getDetailPost };
