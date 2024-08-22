import { getAllArticle } from "@/actions/get-posts";
import LatestCard from "@/components/listing/LatestCard";
import urlFor from "@/libs/urlFor";
import { formatDateTime, subtractDate } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
const HomeView = async () => {
  const allArticle = await getAllArticle({ limit: 15 });
  if (!allArticle.articles) return;
  const data1 = allArticle.articles;
  // const data2 = allArticle.articles.slice(2, 5);
  // const data3 = allArticle.articles.slice(5, 15);
  console.log(data1[0]);
  return (
    <div className="py-10 pr-6">
      {/* <div className="mb-[30px]">
        {data1.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-x-[16px] gap-y-[32px]">
            {data1.map((singleArticle, idx) => (
              <LatestCard article={singleArticle} id={idx} key={idx} />
            ))}
          </div>
        )}
        {data1.length === 0 && (
          <div className="w-full text-center pt-8">
            <p>Không có nội dung trùng khớp!</p>
          </div>
        )}
      </div> */}

      {/* <div className="mb-[30px] overflow-x-scroll">
        <div className="pb-8 w-fit flex gap-x-8 ">
          {data2 &&
            data2.length > 0 &&
            data2.map((singleArticle, idx) => (
              <div
                key={singleArticle._id}
                className="relative w-[427px] h-[240px] rounded-[8px] overflow-hidden"
              >
                <div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent  top-0 left-0 w-full h-full absolute z-[1]">
                  <div className="h-full p-[20px] flex  flex-col justify-end">
                    <p className="text-white text-[18px] font-ibm-plex-sans font-bold">
                      {singleArticle.title}
                    </p>
                    <div className="mt-6 flex justify-between">
                      <div className="flex">
                        <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-red-400">
                          <Image
                            src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
                            alt="avatar"
                            width={28}
                            height={28}
                            className="rounded-full "
                          />
                        </div>
                        <div className="ml-3">
                          <div className="font-bold text-[14px] leading-[1rem] text-white">
                            Tuấn Anh
                          </div>
                          <div className="text-[12px] text-white">
                            {subtractDate(
                              singleArticle._createdAt,
                              now.toString()
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-[hsla(0,0%,100%,.4)] hover:bg-[hsla(0,0%,100%,.6)] cursor-pointer duration-300">
                        <FaRegBookmark className="text-white text-[21px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src={urlFor(singleArticle.mainImage).url()}
                  alt=""
                  fill
                />
              </div>
            ))}
        </div>
      </div> */}
      <div>
        <div className="grid grid-cols-12 gap-x-[20px] gap-y-[16px]">
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
                          <div
                            key={category._id}
                            className="px-[10px] outline outline-[1px] outline-black/30 rounded-[5px] shadow-[3px_3px_black] cursor-pointer hover:bg-black/5 hover:underline duration-200"
                          >
                            <span className="text-[12px] font-medium">
                              {" "}
                              {category.title}
                            </span>
                          </div>
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
