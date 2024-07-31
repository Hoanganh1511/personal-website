interface HeroSectionProps {
  // image: string | null | undefined;
  title: string;
  description: string | undefined;
}
const HeroSection = ({ title, description }: HeroSectionProps) => {
  return (
    <div>
      <div className="relative p-[20px] pt-[20px]">
        <div className="max-w-container-lg mx-auto">
          <div className="w-full h-[80px] mb-[40px] flex items-center justify-center">
            <div className="flex flex-col">
              <div className="mb-4 text-[30px] font-bold font-lexend text-center">
                {title}
              </div>
              <div className="mt-4">
                <p className="text-center">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
