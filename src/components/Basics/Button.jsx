// Button.jsx
import React from "react";

export default function Button({
  children,
  variant = "default",
  size = "medium",
  disabled = false,
  onClick,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-black text-white hover:bg-neutral-700 focus:ring-black",
    secondary:
      "bg-white text-black border border-gray-300 hover:bg-gray-100 focus:ring-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  };

  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const classes = [
    base,
    variants[variant],
    sizes[size],
    className
  ].join(" ");

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
