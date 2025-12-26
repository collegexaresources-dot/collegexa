
import React from 'react';

export const PodcastIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <circle cx="12" cy="12" r="2" />
    <path d="M18.83 18.83a4 4 0 0 0 0-5.66" />
    <path d="M5.17 5.17a4 4 0 0 0 0 5.66" />
    <path d="M12 18a6 6 0 0 0 6-6" />
    <path d="M12 6A6 6 0 0 0 6 12" />
  </svg>
);
