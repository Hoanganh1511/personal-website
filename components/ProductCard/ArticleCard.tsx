import React from "react";
import Image from "next/image";
import urlFor from "@/libs/urlFor";
import { IArticle } from "@/types/apiTypes";
import { formatDateTime, subtractDate } from "@/utils/helper";
import Link from "next/link";
interface ArticleCardProps {
  article: IArticle;
}
const ArticleCard = ({ article }: ArticleCardProps) => {
  const now = new Date();
  return (
    <li className="mb-3">
      <p className="text-white/75">
        📜{" "}
        <a
          href={`/blog/${article._id}`}
          className="text-[#0080a3]  hover:underline"
        >
          {article.title}
        </a>
        :&nbsp; {article.sapo}
      </p>
    </li>
  );
};

export default ArticleCard;
