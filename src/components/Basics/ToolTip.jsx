import React, { useState, useRef, useEffect } from "react";

export default function ToolTip({
  children,
  content,
  delay = 80,
  offset = 6,
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  function handleShow() {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpen(true), delay);
  }

  function handleHide() {
    clearTimeout(timeoutRef.current);
    setOpen(false);
  }

  return (
    <span
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
      onFocus={handleShow}
      onBlur={handleHide}
      onTouchStart={handleShow}
    >
      {children}

      {/* tooltip */}
      <span
        role="tooltip"
        aria-hidden={!open}
        className={`absolute z-50 px-2.5 py-1.5 text-xs rounded-md font-medium shadow-md 
          bg-black text-white whitespace-nowrap transition-all duration-50 ease-out
          left-1/2 bottom-full
          ${
            open && mounted
              ? "opacity-100 translate-y-[-1px]"
              : "opacity-0 translate-y-0"
          }
        `}
        style={{ transform: "translateX(-50%)", marginBottom: offset }}
      >
        {content}

      {/* arrow */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 8,
            height: 8,
            background: "#000",
            left: "50%",
            top: "100%",
            transform: "translateX(-50%) translateY(-50%) rotate(45deg)",

          }}
        />
      </span>
    </span>
  );
}
