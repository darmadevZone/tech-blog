import "katex/dist/katex.min.css";
import type { HTMLAttributes } from "react";
import type { ExtraProps } from "react-markdown";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkToc from "remark-toc";
import "zenn-content-css";

export default function MarkdownProvider({ children }: { children: string }) {
  const remarkPlugins = [remarkGfm, remarkMath, remarkToc] as const;

  return (
    <ReactMarkdown
      remarkPlugins={[...remarkPlugins]}
      rehypePlugins={[rehypeKatex]}
      className={"znc"}
      components={{
        code(props: HTMLAttributes<HTMLElement> & ExtraProps) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              PreTag="code"
              language={match[1]}
              style={atomOneDark}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
