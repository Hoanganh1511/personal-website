import SyntaxHighlighter from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
import Link from "next/link";
import urlFor from "@/libs/urlFor";
import CopyCode from "../CopyCode";

// const Table = ({ value }: { value: any }) => {
//   return (
//     <table>
//       {value.rows.map((row: any, idx: number) => (
//         <TableRow key={idx} row={row} />
//       ))}
//     </table>
//   );
// };
// const TableRow = ({ row }: { row: any }) => {
//   return (
//     <tr>
//       {row.cells.map((cell: any, idx: number) => (
//         <td key={idx}>{cell}</td>
//       ))}
//     </tr>
//   );
// };
const RichTextComponent = {
  types: {
    image: (props: any) => {
      return (
        <div className="mb-5">
          <img src={urlFor(props.value)?.url()} alt="" className="w-full" />
        </div>
      );
    },
    code: (props: any) => {
      if (props.value.hasOwnProperty("code")) {
        return (
          <div className="relative">
            <div className="absolute right-[12px] top-0 -translate-y-1/2">
              <CopyCode copyText={props.value.code} />
            </div>
            <SyntaxHighlighter
              language={props.value.language}
              style={atomOneDark}
              className="text-[14px] !px-[1.2rem] !py-[1rem] rounded-md mb-3"
            >
              {props.value.code}
            </SyntaxHighlighter>
          </div>
        );
      }
    },
    callToAction: ({ value, isInline }: any) =>
      isInline ? <a></a> : <div></div>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="mt-4">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="ml-8 my-[.5em] list-disc leading-[1.75]  text-black-primary font-poppins">
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="mt-2 leading-[1.75] text-black-primary font-poppins">
        {children}
      </li>
    ),
  },
  block: {
    // h1: ({ children }: any) => (
    //   <h1 className="text-[1.5rem] font-semibold leading-[]">{children}</h1>
    // ),
    h2: ({ children }: any) => (
      <h2 className="block mt-[48px] mb-[12px] text-[24px] font-plex-mono leading-normal  font-semibold text-black-primary">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-10 mb-4 text-[16.5px] text-black-primary font-bold">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="my-[15px] pt-[5px] text-[14.5px] text-black-primary font-semibold">
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
        <q className="text-[18px] text-black-primary font-poppins leading-[30.6px]">
          {children}
        </q>
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p className="odd: block leading-[26.4px] text-[16px] mb-[20px] text-black-primary font-poppins">
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
      <strong className="font-bold">{children}</strong>
    ),
  },
};

export default RichTextComponent;
