import ReactMarkdown from "react-markdown";

interface ToolchainColumnProps {
  title: string;
  content: string;
  variant: "old" | "new";
}

const ToolchainColumn = ({ title, content, variant }: ToolchainColumnProps) => {
  const accentColor = variant === "old" ? "text-column-old" : "text-column-new";
  const borderColor = variant === "old" ? "border-column-old" : "border-column-new";
  const dotColor = variant === "old" ? "bg-column-old" : "bg-column-new";

  return (
    <div className={`flex flex-col rounded-lg border ${borderColor} border-opacity-30 bg-card overflow-hidden`}>
      <div className={`flex items-center gap-2 px-5 py-3 border-b border-border`}>
        <span className={`inline-block w-2 h-2 rounded-full ${dotColor}`} />
        <h2 className={`text-sm font-mono font-semibold tracking-wider uppercase ${accentColor}`}>
          {title}
        </h2>
      </div>
      <div className="p-5 prose prose-invert prose-sm max-w-none font-mono
        prose-headings:font-mono prose-headings:text-foreground prose-headings:font-semibold
        prose-p:text-secondary-foreground prose-p:leading-relaxed
        prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-primary prose-code:text-xs
        prose-pre:bg-secondary prose-pre:rounded-md prose-pre:border prose-pre:border-border
        prose-ul:text-secondary-foreground prose-ol:text-secondary-foreground
        prose-li:marker:text-muted-foreground
        prose-strong:text-foreground
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
      ">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ToolchainColumn;
