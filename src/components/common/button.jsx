import { cn } from "../../lib/utils";

export function Button({
  type = "button",
  label,
  onClick,
  icon,
  variant = "gray",
  size = "medium",
  length = "normal",
  rounded = "medium",
  loading = false,
  disabled = false,
  alignment = ""
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={cn(
        "flex items-center gap-2",
        variant === "black" && " bg-black text-white active:animate-bounce hover:shadow",
        variant === "blue" && "bg-[#0052FF] text-white active:animate-bounce hover:shadow",
        variant === "gray" && " bg-[#E9E9E9]  text-black active:animate-bounce hover:shadow",
        size === "small" && "px-2 py-1 text-sm",
        size === "medium" && "px-4 py-2 text-base",
        size === "large" && "px-8 py-3 text-lg",
        length == "long" && "w-10 h-10",
        alignment=="center" && "flex items-center justify-center",
        rounded === "none" && "rounded-none",
        rounded === "small" && "rounded-sm",
        rounded === "medium" && "rounded-md",
        rounded === "large" && "rounded-full",
      )}
      onClick={onClick}
    >
    
      {
        loading ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 animate-spin">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>

        ) : (
            icon
        )
      }
    {label}
    </button>
  );
} 