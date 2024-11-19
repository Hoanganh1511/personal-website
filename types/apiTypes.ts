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
  description: string;
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
  categories: ICategory[];
  _updatedAt: string;
  slug: Slug;
}
interface Slug {
  _type: "slug";
  current: string;
}

export interface RepositoryOwner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
export interface IRepo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: RepositoryOwner;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  open_issues_count: number;
  license: string | null;
  allow_forking: boolean;
  is_template: boolean;
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}
