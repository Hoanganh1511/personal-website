import { IRepo } from "@/types/apiTypes";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const RepositoryCard = ({ repository }: { repository: IRepo }) => {
  return (
    <div className="p-[12px] bg-[rgba(55,65,81,1)] rounded-[8px]">
      <Link
        href={repository.html_url}
        className="text-[14px] text-[rgba(147,197,253,1)] hover:underline"
        target="_blank"
      >
        <div className="flex items-center gap-x-[8px]">
          <Image
            src={repository.owner.avatar_url}
            width={32}
            height={32}
            className="rounded-full"
            alt=""
          />
          {repository.full_name.replace(
            `${process.env.NEXT_PUBLIC_GITHUB_USERNAME!}/`,
            ""
          )}
        </div>
      </Link>
      <Image src={""} alt="" />
    </div>
  );
};

export default RepositoryCard;
