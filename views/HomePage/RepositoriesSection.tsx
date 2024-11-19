"use client";
import RepositoryCard from "@/components/RepositoryCard";
import { IRepo } from "@/types/apiTypes";
import React, { useEffect, useState } from "react";

const RepositoriesSection = () => {
  const [repos, setRepos] = useState<IRepo[]>([]);
  const fetchRepos = () => {
    fetch(
      `https://api.github.com/users/hoanganh1511/repos?sort=updated&per_page=8`
    )
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchRepos();
  }, []);
  return (
    <div>
      <h2 className="mb-[20px] text-[18px] font-semibold text-[#d1d5db]">
        Latest Repositories
      </h2>
      <div className="grid grid-cols-2 gap-[20px]">
        {repos &&
          repos.length > 0 &&
          repos.map((repo, idx) => (
            <RepositoryCard key={idx} repository={repo} />
          ))}
      </div>
    </div>
  );
};

export default RepositoriesSection;
