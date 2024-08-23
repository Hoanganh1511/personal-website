import { getAllArticle } from "@/actions/get-posts";
import Expandable from "@/components/animate/Expandable";
import LatestCard from "@/components/listing/LatestCard";
import CategoryCard from "@/components/ui/CategoryCard";
import urlFor from "@/libs/urlFor";
import { formatDateTime, subtractDate } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
const HomeView = async () => {
  const allArticle = await getAllArticle({ limit: 50 });
  if (!allArticle.articles) return;
  const data1 = allArticle.articles;
  return (
    <div className="py-10 pr-6">
      <div>
        <Expandable />
        <div className="mt-6 grid grid-cols-12 gap-x-[24px] gap-y-[24px]">
          {data1 &&
            data1.length > 0 &&
            data1.map((singleArticle, idx) => (
              <div
                key={singleArticle._id}
                className="group card-photo relative col-span-3 flex flex-col px-[22px] py-[24px] bg-white rounded-[16px] border-[2px] border-transparent border-b-[#dedede]"
              >
                <Link
                  href={`/blog/${singleArticle._id}`}
                  className="relative w-full h-[178px] mr-[24px] rounded-[8px] overflow-hidden"
                >
                  <Image
                    src={urlFor(singleArticle.mainImage).url()}
                    alt=""
                    fill
                    className="group-hover:scale-[1.05] duration-500"
                  />
                </Link>
                <div className="flex-1 flex flex-col">
                  <div className="flex flex-col gap-y-[12px]">
                    <a
                      href={`/blog/${singleArticle._id}`}
                      className="mt-4 text-[20px] leading-[24px] font-bold font-poppins text-[#292929] hover:underline"
                    >
                      {singleArticle.title}
                    </a>
                    <p className=" line-clamp-2 text-black/80 text-[14px] leading-[22px] font-poppins italic">
                      {singleArticle.sapo}
                    </p>
                  </div>
                  <div className="mt-4 flex-1 flex flex-col justify-end">
                    <div className="flex gap-2 flex-wrap">
                      {singleArticle.categories?.map((category, idx) => {
                        return (
                          <CategoryCard
                            key={category._id}
                            category={category}
                          />
                        );
                      })}
                    </div>
                    <div className="flex items-center mt-[14px]">
                      <Link
                        href={`/blog/${singleArticle._id}`}
                        className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-red-400"
                      >
                        <Image
                          src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                          alt="avatar"
                          width={28}
                          height={28}
                          className="rounded-full"
                        />
                      </Link>
                      <div className="ml-3">
                        <a
                          href={`/blog/${singleArticle._id}`}
                          className="block text-[14.5px] leading-[1rem] text-black"
                        >
                          Tuấn Anh
                        </a>
                        <div className="mt-[2px] text-[12.5px] text-black">
                          Cập nhật gần nhất:{" "}
                          {formatDateTime(singleArticle._updatedAt)}
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default HomeView;
