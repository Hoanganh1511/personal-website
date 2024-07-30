export type SearchParamsType = Record<string, string | string[] | undefined>;
type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};
interface Block {
  style: string;
  _key: string;
  markDefs: any[];
  children: any[];
  _type: "block";
}
interface Reference {
  _ref: string;
  _type: "reference";
}

interface ImageAsset {
  _type: "reference";
  _ref: string;
}
interface Image {
  _type: "image";
  asset: Reference;
}
interface Author extends Base {
  name: string;
}
export interface Post extends Base {
  mainImage: {
    _type: "image";
    asset: ImageAsset;
  };
  author: Author;
  _createdAt: string;
  body: Block[];
  _rev: string;
  _type: "post";
  sapo: string;
  _id: string;
  title: string;
  hashtag: string;
  _updatedAt: string;
  slug: Slug;
}
interface Slug {
  _type: "slug";
  current: string;
}
