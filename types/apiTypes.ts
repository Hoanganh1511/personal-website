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
