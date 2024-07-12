import { client } from "@/libs/sanity.client";
import { groq } from "next-sanity";
const getAllCategory = () => {
  const querySanity = groq`*[_type=="category" ]{
             ...,
           } | order(_updatedAt desc)`;

  return client.fetch(querySanity);
};
export { getAllCategory };
