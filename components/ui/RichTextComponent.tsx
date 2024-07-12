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
    table: Table,
    tableRow: TableRow,
  },
  list: {
    bullet: ({ children }: any) => <ul className="mt-4">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="ml-4 mt-2 font-light  list-disc">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="ml-4 mt-2 font-light  list-decimal">{children}</li>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1>{children}</h1>,
    h2: ({ children }: any) => (
      <h2 className="mt-16 mb-4 text-[28px] font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-10 mb-4 text-[16.5px] text-[#333333] font-bold">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="my-[15px] pt-[5px] text-[14.5px] text-[#333333] font-semibold">
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="my-[15px] pt-[5px] text-[14px] text-[#333333] font-semibold">
        {children}
      </h5>
    ),
    blockquote: ({ children }: any) => (
      <blockquote>
        <q>{children}</q>
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="font-light leading-[22.4px] mt-3 ">{children}</p>
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
          className="underline font-bold decoration-black hover:text-blue-500 hover:decoration-blue-500"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }: any) => (
      <strong className="font-bold text-[18px]">{children}</strong>
    ),
  },
};

export default RichTextComponent;
