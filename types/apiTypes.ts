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
interface Author extends Base {
  name: string;
}

export interface ICategory {
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
  tag: ITag;
  title: string;
  _updatedAt: string;
}

export interface ITag {
  current: string;
  _type: string;
}
export interface IArticle extends Base {
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
