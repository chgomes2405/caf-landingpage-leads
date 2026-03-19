import { SVGProps } from "react";

export function AntIcon(props: SVGProps<SVGSVGElement>) {
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
      {/* Cabeça */}
      <circle cx="6" cy="12" r="2" />
      {/* Tórax */}
      <circle cx="12" cy="12" r="2" />
      {/* Abdome */}
      <circle cx="18" cy="12" r="3" />

      {/* Antenas */}
      <path d="M5 10L3 7" />
      <path d="M5 14L3 17" />

      {/* Patas Dianteiras */}
      <path d="M11 10L9 6" />
      <path d="M11 14L9 18" />

      {/* Patas Centrais */}
      <path d="M12 10L14 6" />
      <path d="M12 14L14 18" />

      {/* Patas Traseiras */}
      <path d="M17 9.5L19 5" />
      <path d="M17 14.5L19 19" />
    </svg>
  );
}
