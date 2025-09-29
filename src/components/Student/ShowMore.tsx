import { useState, useRef, useEffect, type JSX } from "react";

interface ShowMoreProps {
  children: JSX.Element | JSX.Element[];
  initiallyExpanded?: boolean;
}

export function ShowMore({
  children,
  initiallyExpanded = false,
}: ShowMoreProps): JSX.Element {
  const [expanded, setExpanded] = useState(initiallyExpanded);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className="w-full">

      <button
        className="mt-2 text-blue-600 font-medium hover:underline"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Como leer esta tabla" : "Ver más"}
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: expanded ? `${maxHeight}px` : "0px" }}
      >
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
}
