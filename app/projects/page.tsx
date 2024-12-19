import { getAllArticle } from "@/actions/get-posts";
import Image from "next/image";
import Link from "next/link";
const listProject = [
  {
    name: "Báo Điện Biên Phủ",
    href: "https://baodienbienphu.com.vn/",
    image:
      "https://cdn-i.vtcnews.vn/resize/la/upload/2024/12/18/quan-doi-nhan-dan-viet-nam-16065349.jpg",
  },
  {
    name: "VTC Game | Nhà phát hành game hàng đầu Việt Nam",
    href: "https://vtcgame.vn/vi",
    image: "https://vtcgame.vn/images/vtcshare.jpg",
  },
  {
    name: "VTC Game Academy",
    href: "https://vtcgame.edu.vn/",
    image:
      "https://cdnmedia.vtcgame.vn/gameacademy/trangchu/assets/images/Thumnail_VGA.jpg",
  },
  {
    name: "Au PC - Audition - Nơi cảm xúc thăng hoa",
    href: "https://au.vtc.vn/",
    image:
      "https://cdnmedia.vtcgame.vn/aupc/trangchu/assets/images/Thumb_Audition.jpg",
  },
  {
    name: "Au 2! - Quẩy cực phiêu | VTC Game",
    href: "https://au2.vtcgame.vn/",
    image:
      "https://cdnmedia.vtcgame.vn/au2/au2homepage2024/assets/images/1200x628.png",
  },
  {
    name: "VIP Au 2! | VTC Game",
    href: "https://au2.vtcgame.vn/vipau2",
    image: "https://cdnmedia.vtcgame.vn/au2/vip/assets/images/thumbnail.png",
  },
  {
    name: "Audition - AuLeague",
    href: "https://au.vtc.vn/auleague",
    image:
      "https://cdnmedia.vtcgame.vn/aupc/trangchu/assets/images/audition-gameamnhacthoitranghenho.jpg",
  },
];
export default async function Home() {
  return (
    <div className="py-[40px] max-w-[1280px] mx-auto">
      <div className="flex gap-x-[60px]">
        <div className="w-1/2">
          <h3 className="title-separate my-[24px] flex items-center justify-center relative after:">
            <a
              href=""
              className="px-6 block bg-white text-[26px] text-[#3c3c3b] font-bold uppercase"
            >
              Next.js
            </a>
          </h3>
          <div className="flex flex-col gap-y-[8px]">
            {listProject.map((project, id) => {
              return (
                <Link
                  key={id}
                  href="/"
                  className="flex rounded-[5px] border-[1px] border-gray-600"
                >
                  <div className="relative w-[162px] h-[113px] bg-gray-200 border-r-[1px] border-gray-300">
                    <Image
                      src={project.image || ""}
                      fill
                      alt=""
                      className="object-cover"
                    />
                  </div>
                  <div className="group flex-1 flex flex-col items-end p-[10px]">
                    <div className="p-[10px] pr-0  w-full h-full group-hover:pr-[10px] group-hover:bg-[#63ff86] duration-300 rounded-[6px]">
                      <h4 className="text-[20px] text-right">{project.name}</h4>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="title-separate my-[24px] flex items-center justify-center relative after:">
            <a
              href=""
              className="px-6 block bg-white text-[26px] text-[#3c3c3b] font-bold uppercase"
            >
              React
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}
