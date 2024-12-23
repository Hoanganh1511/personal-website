"use client";
import { useTransitionRouter } from "next-view-transitions";

export default function TitleTransition({
  title,
  slug,
}: {
  title: string;
  slug: string;
}) {
  const router = useTransitionRouter();
  return (
    <h2>
      <span
        className="text-[1.5rem] text-primary leading-[2rem] font-poppins font-semibold text-left"
        style={{
          viewTransitionName: `demo-title-${slug}`,
        }}
      >
        {title}
      </span>
    </h2>
  );
}
