
import React from 'react';

export const CollegeLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    {/* Shield Outline */}
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    {/* Flame/Torch Detail */}
    <path d="M12 17v-4" />
    <path d="M9 11.5c.5-1 1.5-2.5 3-2.5s2.5 1.5 3 2.5c.5 1 0 2.5-1 3.5s-2 1-2 1-1 0-2-1-1.5-2.5-1-3.5z" />
    <path d="M11 9c0-1.5 1-3 1-3s1 1.5 1 3" />
  </svg>
);
