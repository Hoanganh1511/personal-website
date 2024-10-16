import { client } from "@/libs/sanity.client";
import { QueryParams } from "next-sanity";
export const ITEMS_PER_PAGE = 6;

async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate: number | false;
  tags?: string[];
}) {
  return client.fetch(query, {}, { next: { revalidate: 60 } });
}
export { sanityFetch };
