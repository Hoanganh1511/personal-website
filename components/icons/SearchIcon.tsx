import React from "react";

const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      width={24}
      height={24}
      className={className}
      aria-hidden="true"
    >
      <path d="M24.06 23.22l-6.38-6.38a10.11 10.11 0 10-.85.85l6.37 6.37zM1.2 10.13A8.93 8.93 0 1110.13 19a8.94 8.94 0 01-8.93-8.87z"></path>
    </svg>
  );
};

export default SearchIcon;
