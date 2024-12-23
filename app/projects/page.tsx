import { getAllArticle } from "@/actions/get-posts";
import Image from "next/image";
import Link from "next/link";
const listProject = [
  {
    name: "Báo Điện Biên Phủ",
    href: "https://baodienbienphu.com.vn/",
    image:
      "https://cdn-i.vtcnews.vn/resize/la/upload/2024/12/18/quan-doi-nhan-dan-viet-nam-16065349.jpg",
    description:
      "Cơ quan của Đảng bộ Đảng Cộng sản Việt Nam tỉnh Điện Biên. Tiếng nói của Đảng bộ, chính quyền và Nhân dân các dân tộc tỉnh Điện Biên.",
  },
  {
    name: "Cổng 1400",
    href: "https://1400.vn/",
    image: "https://cdn.tgdd.vn//GameApp/-1//thumb2-800x450-15.jpg",
    description:
      "Vận động nhân dân cả nước ủng hộ quà Tết giúp nạn nhân nhiễm chất độc da cam và gia đình có người thân nhiễm chất độc da cam có hoàn cảnh khó khăn.",
  },
  {
    name: "VTC Game | Nhà phát hành game hàng đầu Việt Nam",
    href: "https://vtcgame.vn/vi",
    image: "https://vtcgame.vn/images/vtcshare.jpg",
    description:
      "1 thành viên của VTC Intecom, là nhà phát hành game duy nhất trực thuộc Chính phủ và luôn nằm trong top 3 tại Việt Nam từ 2006",
  },
  {
    name: "VTC Game Academy",
    href: "https://vtcgame.edu.vn/",
    image:
      "https://cdnmedia.vtcgame.vn/gameacademy/trangchu/assets/images/Thumnail_VGA.jpg",
    description:
      "Một trường học về Game, tạo ra trò chơi, sáng tạo nội dung và hoạt hình trao quyền cho thế hệ người sáng tạo tiếp theo",
  },
  {
    name: "Gigago",
    href: "https://gigago.com/",
    description:
      "GIGAGO là đơn vị cung cấp giải pháp kết nối IoT và eSIM du lịch quốc tế UY TÍN và HÀNG ĐẦU cho hơn 100 quốc gia và vùng lãnh thổ.",
    image: "https://i.ytimg.com/vi/Mctmj1FIVcM/maxresdefault.jpg",
  },
  {
    name: "Eduquiz",
    href: "https://eduquiz.vn/",
    description:
      "Tạo câu hỏi và đề thi nhanh với những giải pháp thông minh. EduQuiz tận dụng sức mạnh công nghệ để nâng cao trình độ học tập của bạn.",
    image: "https://eduquiz.vn/images/homepage.png",
  },
  {
    name: "Au PC - Audition - Nơi cảm xúc thăng hoa",
    href: "https://au.vtc.vn/",
    image:
      "https://cdnmedia.vtcgame.vn/aupc/trangchu/assets/images/Thumb_Audition.jpg",
    description:
      "Đẳng cấp vũ công Audition huyền thoại - Tựa game âm nhạc, thời trang số 1 Việt Nam! Xem ngay!!",
  },
  {
    name: "Au 2! - Quẩy cực phiêu | VTC Game",
    href: "https://au2.vtcgame.vn/",
    image:
      "https://cdnmedia.vtcgame.vn/au2/au2homepage2024/assets/images/1200x628.png",
    description:
      "Quẩy cực phiêu. Au 2! là tựa game vũ đạo thời trang chuẩn style Audition dành cho giới trẻ do VTC Game phát hành",
  },
  {
    name: "VIP Au 2! | VTC Game",
    href: "https://au2.vtcgame.vn/vipau2",
    image: "https://cdnmedia.vtcgame.vn/au2/vip/assets/images/thumbnail.png",
    description: "Nơi hội tụ, tôn vinh và tri ân các khách hàng Vip Au 2!",
  },
  {
    name: "Audition - AuLeague",
    href: "https://au.vtc.vn/auleague",
    image:
      "https://cdnmedia.vtcgame.vn/aupc/trangchu/assets/images/audition-gameamnhacthoitranghenho.jpg",
    description: "hệ thống thi đấu xếp hạng dành riêng cho game thủ Audition!",
  },
  {
    name: "Avatar Art",
    href: "https://avatarart.io/",
    description:
      "Một thị trường NFT dành cho thế hệ nhà sáng tạo kỹ thuật số tiếp theo muốn mua, bán và khám phá các bộ sưu tập mới nhất. Ưu tiên hướng đến người dùng.",
    image:
      "https://thanhnien.mediacdn.vn/Uploaded/quochung-qc/2021_12_22/avatarart-2-9042.jpg",
  },
  {
    name: "Bvote - Hoa hậu hoàn vũ / Duyên dáng Ngoại Thương (FTU)",
    href: "https://duyendangngoaithuong.bvote.vn/",
    image:
      "https://cdnmedia.vtcgame.vn/aupc/trangchu/assets/images/audition-gameamnhacthoitranghenho.jpg",
  },
];
export default async function Home() {
  return (
    <div className="py-[40px] max-w-[48rem] mx-auto">
      <div className="flex gap-x-[60px]">
        <div className="w-full">
          <h3 className="title-separate my-[24px] flex items-center justify-center relative after:">
            <a
              href=""
              className="px-6 block bg-white text-[26px] text-[#3c3c3b] font-bold uppercase"
            >
              Next.js
            </a>
          </h3>
          <p className="mb-4">Hiện có {listProject.length} projects</p>
          <div className="flex flex-col gap-y-[8px]">
            {listProject.map((project, id) => {
              return (
                <Link
                  key={id}
                  target="_blank"
                  href={project.href || ""}
                  className="flex rounded-[5px] border-[1px] border-gray-600"
                >
                  <div className="relative w-[162px] h-[113px] bg-gray-200 border-r-[1px] border-gray-300 rounded-[5px] overflow-hidden">
                    <Image
                      src={project.image || ""}
                      fill
                      alt=""
                      className="object-cover"
                    />
                  </div>
                  <div className="group flex-1 flex flex-col items-end p-[10px]">
                    <div className="p-[10px] pr-0  w-full h-full group-hover:pr-[10px] duration-300 rounded-[6px]">
                      <h4 className="text-[20px] text-right font-medium group-hover:text-primary">
                        {project.name}
                      </h4>
                      <p className="text-right line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {/* <div className="w-1/2">
          <h3 className="title-separate my-[24px] flex items-center justify-center relative after:">
            <a
              href=""
              className="px-6 block bg-white text-[26px] text-[#3c3c3b] font-bold uppercase"
            >
              React
            </a>
          </h3>
        </div> */}
      </div>
    </div>
  );
}
