"use client";
import RepositoryCard from "@/components/RepositoryCard";
import { IRepo } from "@/types/apiTypes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CertificateSection = () => {
  const [repos, setRepos] = useState<IRepo[]>([]);
  const fetchRepos = () => {
    fetch(
      `https://api.github.com/users/hoanganh1511/repos?sort=updated&per_page=8`
    )
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      });
  };

  useEffect(() => {
    fetchRepos();
  }, []);
  return (
    <div>
      <h2 className="mb-[20px] text-[18px] font-semibold text-[#d1d5db]">
        Certificates
      </h2>
      <div className="flex flex-col gap-y-[10px]">
        {[
          {
            url: "https://www.hackerrank.com/certificates/cc72fb8981f4",
            name: "Rest API (Intermediate) Certificate",
          },
          {
            url: "https://www.hackerrank.com/certificates/90abdd897eea",
            name: "Frontend Developer (React) Certificate",
          },
        ].map((cert, idx) => (
          <div className="px-[8px]" key={idx}>
            <Link
              href={cert.url}
              target="_blank"
              className="text-[#60a5fa] hover:underline"
            >
              {cert.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateSection;
