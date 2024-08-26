import { client } from "@/libs/sanity.client";
import { IArticle, ICategory } from "@/types/apiTypes";
import { groq } from "next-sanity";

export const ITEMS_PER_PAGE = 6;

const getAllCategories = async () => {
  const querySanity = groq`*[_type=="category"] {
          ...,
         
        } | order(_createdAt desc)`;

  const data = await client.fetch(querySanity);
  return {
    categories: data as ICategory[],
  };
};
export { getAllCategories };
