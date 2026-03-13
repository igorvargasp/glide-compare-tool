import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { ChevronDown, ChevronRight } from "lucide-react";

interface LessonCardProps {
  title: string;
  content: string;
  duration?: string;
  defaultOpen?: boolean;
}

const LessonCard = ({ title, content, duration, defaultOpen = false }: LessonCardProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-secondary/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          {isOpen ? (
            <ChevronDown className="w-4 h-4 text-column-new shrink-0" />
          ) : (
            <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
          )}
          <h3 className="text-sm font-mono font-semibold text-foreground text-left">{title}</h3>
        </div>
        {duration && (
          <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded">
            {duration}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 prose prose-invert prose-sm max-w-none font-mono
          prose-headings:font-mono prose-headings:text-foreground prose-headings:font-semibold prose-headings:text-sm
          prose-p:text-secondary-foreground prose-p:leading-relaxed prose-p:text-xs
          prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-primary prose-code:text-xs
          prose-pre:bg-secondary prose-pre:rounded-md prose-pre:border prose-pre:border-border
          prose-ul:text-secondary-foreground prose-ol:text-secondary-foreground prose-ul:text-xs prose-ol:text-xs
          prose-li:marker:text-muted-foreground
          prose-strong:text-foreground
          prose-table:text-xs
          prose-th:text-foreground prose-th:font-semibold prose-th:border-border prose-th:px-2 prose-th:py-1
          prose-td:text-secondary-foreground prose-td:border-border prose-td:px-2 prose-td:py-1
        ">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default LessonCard;
