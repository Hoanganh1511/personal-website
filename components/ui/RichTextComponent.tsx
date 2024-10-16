import Image from "next/image";
import Link from "next/link";
import urlFor from "@/libs/urlFor";
const Table = ({ value }: { value: any }) => {
  return (
    <table>
      {value.rows.map((row: any, idx: number) => (
        <TableRow key={idx} row={row} />
      ))}
    </table>
  );
};
const TableRow = ({ row }: { row: any }) => {
  return (
    <tr>
      {row.cells.map((cell: any, idx: number) => (
        <td key={idx}>{cell}</td>
      ))}
    </tr>
  );
};
const RichTextComponent = {
  types: {
    image: ({ value }: any) => <div></div>,
    callToAction: ({ value, isInline }: any) =>
      isInline ? <a></a> : <div></div>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="mt-4">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="ml-8 mt-2 list-disc leading-[30.6px] text-[18px]  text-white/70 font-poppins">
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="mt-2 leading-[30.6px] text-[18px]  text-white/70 font-poppins">
        {children}
      </li>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="">{children}</h1>,
    h2: ({ children }: any) => (
      <h2 className="block mt-[40px] mb-[20px] text-[32px] leading-normal font-poppins font-semibold text-[#E3E3E3]/80">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-10 mb-4 text-[16.5px] text-[#E3E3E3]/80 font-bold">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="my-[15px] pt-[5px] text-[14.5px] text-[#E3E3E3]/80 font-semibold">
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="my-[15px] pt-[5px] text-[14px] text-[#E3E3E3] font-semibold">
        {children}
      </h5>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="rounded-[8px] p-[20px] bg-[rgba(248,211,226,.09)] border-[1px] border-[rgba(51,181,51,1)]">
        <q className="text-[18px] text-white/70 font-poppins leading-[30.6px]">
          {children}
        </q>
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="odd: block leading-[26.4px] text-[16px] my-[18px] text-[#E3E3E3]/60 font-poppins">
        {children}
      </p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline font-bold  text-[#0080a3] hover:underline "
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }: any) => (
      <strong className="font-poppins-bold text-[18px]">{children}</strong>
    ),
  },
};

export default RichTextComponent;
