import { SVGProps } from "react";

export function TermiteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Mandíbulas grandes */}
      <path d="M10 2C9 4 11 5 11 5" />
      <path d="M14 2C15 4 13 5 13 5" />
      
      {/* Cabeça */}
      <circle cx="12" cy="7" r="2" />
      
      {/* Tórax */}
      <rect x="10" y="9" width="4" height="4" rx="1.5" />
      
      {/* Abdome gordo (típico de cupim) */}
      <rect x="9" y="13" width="6" height="8" rx="3" />
      
      {/* Antenas curtas */}
      <path d="M10 6L8 5" />
      <path d="M14 6L16 5" />

      {/* Patas Dianteiras */}
      <path d="M10 10L6 9" />
      <path d="M14 10L18 9" />

      {/* Patas Centrais */}
      <path d="M9 14L5 13" />
      <path d="M15 14L19 13" />

      {/* Patas Traseiras */}
      <path d="M9 18L6 19" />
      <path d="M15 18L18 19" />
    </svg>
  );
}
