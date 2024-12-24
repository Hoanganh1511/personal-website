import { getAllArticle, getDetailPost } from "@/actions/get-posts";
import RichTextComponent from "@/components/ui/RichTextComponent";
import { PortableText } from "next-sanity";
import React from "react";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandTelegram,
  IconHash,
} from "@tabler/icons-react";
import Link from "next/link";
import BackButton from "./_component/BackButton";
import ScrollToTopButton from "./_component/ScrollToTop";
import TitleView from "./_component/TitleTransition";
import ScrollLinked from "./_component/ScrollLinked";
export async function generateStaticParams() {
  let resPosts = await getAllArticle({});

  return resPosts.data.map((post) => ({
    slug: post.slug.current,
  }));
}

const BlogDetail = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  // const totalPagesArray = getPageNumbers()
  // const currentPage = !isNaN(Number(slug));
  const post = await getDetailPost(slug);
  return (
    <ScrollLinked>
      <div className="max-w-[48rem] mx-auto relative px-[1rem]">
        <div className="pb-[48px]">
          <BackButton />

          <TitleView
            title={post?.title || ""}
            slug={post?.slug.current || ""}
          />
          <div className="font-plex-mono italic mt-[8px] ">
            September 6, 2022 · 5 min read
          </div>

          <div className="mt-[32px]">
            <PortableText value={post?.body} components={RichTextComponent} />
          </div>
          <div className="my-[2rem]">
            <div className="flex gap-x-[18px] flex-wrap">
              {["nextjs", "react-server-component", "react", "seo"].map(
                (item, id) => (
                  <Link
                    href="/"
                    key={id}
                    className="group inline border-dashed border-b-[2px] border-black-primary hover:border-primary hover:translate-y-[-3px]"
                  >
                    <IconHash
                      color={""}
                      className="size-[18px] stroke-black-primary/80 group-hover:stroke-primary inline-block"
                    />
                    <span className="text-[14px] group-hover:text-primary">
                      {item}
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="italic">Share this post on:</p>
              <div className="mt-[12px] flex items-center gap-x-[10px] opacity-80">
                <a href="/" className="group hover:rotate-[10deg]">
                  <IconBrandFacebook className="group-hover:stroke-primary" />
                </a>
                <a href="/" className="group hover:rotate-[10deg]">
                  <IconBrandTwitter className="group-hover:stroke-primary" />
                </a>
                <a href="/" className="group hover:rotate-[10deg]">
                  <IconBrandTelegram className="group-hover:stroke-primary" />
                </a>
              </div>
            </div>
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </ScrollLinked>
  );
};

export default BlogDetail;
