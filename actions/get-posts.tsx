import { client } from "@/libs/sanity.client";
import { IArticle } from "@/types/apiTypes";
import { groq } from "next-sanity";

export const ITEMS_PER_PAGE = 6;
interface IParams {
  category?: string;
}
const getAllArticle = async (params: { limit?: number }) => {
  const querySanity = groq`*[_type=="post"] ${params.limit ? `[0...${params.limit}]` : ""} {
          ...,
          author->,
          categories[]->,
        } | order(_updatedAt asc)`;

  const data = await client.fetch(querySanity);
  return {
    articles: data as IArticle[],
  };
};
const getArticlesByCategory = async (params: IParams) => {
  const querySanity = groq`*[_type=="post" && $category in categories[]->tag.current]{
          ...,
          author->,
          categories[]->,
          "category": *[_type == 'category' && tag.current == $category][0]
        } | order(_updatedAt asc)`;

  const data = await client.fetch(querySanity, {
    category: params.category,
  });
  if (!data.length) {
    return {
      articles: [],
      title: "",
      description: "",
    };
  }
  return {
    articles: data,
    title: data[0].category.title,
    description: data[0].category.description,
  };
};

const getDetailPost = async (id: string) => {
  const post = await client.fetch(
    groq`*[_type=="post" && _id == $id ][0]`,
    { id },
    {
      //  cache: "cache",
    }
  );
  return post;
};
export { getAllArticle, getArticlesByCategory, getDetailPost };
