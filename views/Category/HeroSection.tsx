interface HeroSectionProps {
  // image: string | null | undefined;
  title: string;
  description: string | undefined;
}
const HeroSection = ({ title, description }: HeroSectionProps) => {
  return (
    <div>
      <div className="relative">
        <div className="w-full h-[80px] mb-[40px] ">
          <div className=" text-[32px] text-[#E3E3E3] leading-normal font-poppins font-bold text-left mb-4 ">
            📨 {title}
          </div>
          <div className="mt-4">
            <p className="text-white/75">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
