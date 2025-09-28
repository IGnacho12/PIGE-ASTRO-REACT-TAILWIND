import React from "react";
import { Keyboard } from "@geist-ui/core";

export default function Search({ filterText, onFilterTextChange, width = "w-full", placeholder = "Buscar..." }) {
  return (
    <div className={`relative ${width}`}>
      <input
        className="shadow-sm px-4 py-1 rounded-sm border border-[var(--border)] hover:bg-[var(--hover-background)] w-full outline-0"
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <div className="absolute right-2 top-0 h-full flex items-center gap-1 scale-95">
        <Keyboard>Ctrl K</Keyboard>
      </div>
    </div>
  );
}
