
import React from 'react';

export const ToolboxIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 12h-4" />
    <path d="M4 12H2" />
    <path d="M12 20v-4" />
    <path d="M12 4V2" />
    <path d="m15 15-2-2-2 2" />
    <path d="m9 9 2 2 2-2" />
    <path d="M18 12a6 6 0 1 1-6-6 6 6 0 0 1 6 6z" />
  </svg>
);
