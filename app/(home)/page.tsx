import { getAllArticle } from "@/actions/get-posts";
import RepositoryCard from "@/components/RepositoryCard";
import CertificateSection from "@/views/HomePage/CertificateSection";
import JobSection from "@/views/HomePage/JobSection";
import RepositoriesSection from "@/views/HomePage/RepositoriesSection";
import Image from "next/image";
export default async function Home() {
  return (
    <div className="">
      <div className="flex items-center">
        <Image
          src="/images/avatar.webp"
          alt=""
          width={128}
          height={128}
          className="rounded-full shadow-[0_4px_30px_#0369a1]"
        />
        <div className="ml-[20px]">
          <p className="mb-[14px] leading-[1.5em] text-[#d1d5db]">
            Hello, my name is Hoang Tuan Anh. I’m a software developer from Viet
            Nam, skilled in multiple technologies and domains such as React,
            Vue, Node.js, and AWS.
          </p>
          <p className="leading-[1.5em] text-[#d1d5db]">
            I am focusing on web development and keeping up to date with
            everything going on in the field. Currently, I am working on
            projects using React and Next.js App Router.
          </p>
        </div>
      </div>
      <div className="mt-[30px] w-full p-[20px] rounded-[8px] border-[1px] border-white/30">
        <JobSection />
      </div>
      <div className="mt-[30px] w-full p-[20px] rounded-[8px] border-[1px] border-white/30">
        <RepositoriesSection />
      </div>
      <div className="mt-[30px] w-full p-[20px] rounded-[8px] border-[1px] border-white/30">
        <CertificateSection />
      </div>

      {/* <div className="mt-[30px] w-full p-[20px] rounded-[8px] border-[1px] border-white/30">
        <h2 className="mb-[14px]">Latest Repositories</h2>
        <div className="grid grid-cols-2 gap-[20px]">
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
          <RepositoryCard />
        </div>
      </div> */}
    </div>
  );
}
