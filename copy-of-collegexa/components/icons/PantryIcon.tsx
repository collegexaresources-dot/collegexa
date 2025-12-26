
import React from 'react';

export const PantryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <path d="M4 10V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
    <path d="M4 14v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
    <path d="M12 10v4" />
    <path d="M10 10H4" />
    <path d="M20 10h-6" />
    <path d="M10 14H4" />
    <path d="M20 14h-6" />
  </svg>
);
