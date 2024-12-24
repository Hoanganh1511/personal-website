import SyntaxHighlighter from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
interface Props {
  props: {
    value: {
      code: string;
      language: string;
    };
  };
}
const CodeBlock = ({ props }: Props) => {
  const { code, language } = props?.value;
  return (
    <SyntaxHighlighter
      showLineNumbers={true}
      showInlineLineNumbers={true}
      language={language}
      style={atomOneDark}
      customStyle={{
        padding: "1em",
        marginBottom: "2em",
      }}
      className="text-[14px] !px-[1.2rem] !py-[1rem] rounded-md mb-3"
    >
      {code}
    </SyntaxHighlighter>
  );
};
export default CodeBlock;
