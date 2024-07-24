import { client } from "@/libs/sanity.client";
// import { Post } from "@/types";
import { groq } from "next-sanity";

export const ITEMS_PER_PAGE = 6;
interface IParams {
  category?: string;
  sort?: string;
  keyword?: string;
}
const getAllPosts = (params: IParams) => {
  const querySanity = groq`*[_type=="post"
  ${params && params.keyword?.length! > 0 ? "&& title match $keyword" : ""}
  ]{
          ...,
          author->,
          categories[]->,
        } | order(_updatedAt ${params.sort || "asc"})`;

  return client.fetch(querySanity, {
    sort: params.sort || "desc",
    keyword: params.keyword || "",
  });
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
export { getAllPosts, getDetailPost };
