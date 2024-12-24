import Pagination from "@/app/blogs/_components/Pagination";
import { IArticle } from "@/types/apiTypes";
import { formatDateTime } from "@/utils/helper";
import { IconCalendarWeekFilled } from "@tabler/icons-react";
import { Link } from "next-view-transitions";
import React from "react";
export interface PaginationProps {
  totalPages: number;
  currentPage: number;
}
interface ListLayoutProps {
  title?: string;
  posts: IArticle[];
  pagination?: PaginationProps;
}
const ListLayout = ({ title, posts, pagination }: ListLayoutProps) => {
  return (
    <section className="">
      {title && <h3 className="text-[24px] font-semibold">{title}</h3>}
      <div className="mt-[1.5rem] grid grid-cols-1 gap-x-[30px] gap-y-[40px]">
        {posts.map((post, idx) => (
          <div key={idx} className="group col-span-1 w-full mx-auto   ">
            <Link
              href={`/blogs/${post.slug.current}`}
              className=" block w-fit text-[18px] font-medium text-primary hover:underline hover:decoration-dashed underline-offset-4"
              style={{
                viewTransitionName: `demo-title-${post.slug.current}`,
              }}
            >
              {post.title}
            </Link>
            <div className="my-[6px]">
              <div className="flex items-center gap-x-[8px]">
                <IconCalendarWeekFilled className="size-[22px] fill-black-primary/80" />
                <p className="italic text-[14px] leading-[1rem] ">
                  {formatDateTime(post._createdAt)}
                </p>
              </div>
              <p className="mt-[2px] text-[15px]  line-clamp-3">{post.sapo}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-12">
        <Pagination
          currentPage={pagination?.currentPage || 0}
          totalPages={pagination?.totalPages || 0}
        />
      </div>
    </section>
  );
};

export default ListLayout;
