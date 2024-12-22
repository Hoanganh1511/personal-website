"use client";
import { useTransitionRouter } from "next-view-transitions";

export default function TitleView({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  const router = useTransitionRouter();
  return (
    <div className="demo-box">
      <h2>
        This is the{" "}
        <span
          className="text-[1.5rem] text-primary leading-[2rem] font-poppins font-semibold text-left"
          style={{
            viewTransitionName: `demo-title-${slug}`,
          }}
        >
          {title}
        </span>
      </h2>
      <p>OK you just saw the demo :)</p>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          router.back();
        }}
      >
        ← Back to homepage
      </a>
    </div>
  );
}
