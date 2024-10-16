import { client } from "@/libs/sanity.client";
import { IArticle } from "@/types/apiTypes";
import { groq } from "next-sanity";

export const ITEMS_PER_PAGE = 6;
interface IParams {
  category?: string;
  limit?: number;
}

const getAllArticle = async (params: { limit?: number }) => {
  const querySanity = groq`*[_type=="post"] ${params.limit ? `[0...${params.limit}]` : ""} {
          ...,
          author->,
          categories[]->,
        } | order(_createdAt desc)`;

  const data = await client.fetch(querySanity);
  return {
    data: data as IArticle[],
  };
};
const getArticlesByCategory = async (params: IParams) => {
  console.log(params.category);
  const querySanity = groq`*[_type=="post" && $category in categories[]->tag.current] ${params.limit ? `[0...${params.limit}]` : ""}{
          ...,
          author->,
          categories[]->,
          "category": *[_type == 'category' && tag.current == $category][0]
        } | order(_updatedAt desc)`;

  const data = await client.fetch(querySanity, {
    category: params.category,
  });
  if (!data.length) {
    return {
      data: [],
      title: "",
      description: "",
    };
  }
  return {
    data: data as IArticle[],
    title: data[0].category.title,
    description: data[0].category.description,
  };
};

const getDetailPost = async (id: string) => {
  const post = await client.fetch(
    groq`*[_type=="post" && _id == $id ][0]{
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
