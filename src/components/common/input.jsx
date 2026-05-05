import { cn } from "../../lib/utils";

export function Input({
  value,
  onChange,
  placeholder = "",
  type = "text",
  size = "medium",
  rounded = "large",
  fullWidth = true,
  className = "",
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={cn(
        "outline-none border transition-all",
        
        // Base style to match image
        " border-gray-400 text-gray-700",
        "focus:border-gray-400 focus:shadow",
        
        // Sizes
        size === "small" && "px-3 py-2 text-sm",
        size === "medium" && "px-20 py-4 text-base",
        size === "large" && "px-6 py-4 text-lg",

        // Rounded
        rounded === "none" && "rounded-none",
        rounded === "small" && "rounded-sm",
        rounded === "medium" && "rounded-md",
        rounded === "large" && "rounded-xl",

        fullWidth && "w-full",

        className
      )}
    />
  );
}