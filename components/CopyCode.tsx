"use client";
import React, { useState } from "react";

const CopyCode = ({ copyText }: { copyText: string }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(copyText);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 800);
  };
  return (
    <button
      onClick={copyToClipboard}
      className="text-[12px] px-[8px] py-[4px] rounded-[4px] bg-[rgba(234,206,219,1)]  duration-500 text-black-primary"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
};

export default CopyCode;
