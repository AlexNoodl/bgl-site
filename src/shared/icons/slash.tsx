import type { SVGProps } from "react";

export function SlashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <rect width="24" height="24" rx="6" fill="#404040" />
      <path d="M9 18.04L13.144 6H14.572L10.442 18.04H9Z" fill="#D4D4D4" />
    </svg>
  );
}
