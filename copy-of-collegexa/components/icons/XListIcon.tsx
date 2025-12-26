import React from 'react';

export const XListIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9.5" stroke="#F87171" strokeOpacity="0.5"/>
    <path d="M12.5 7.5L7.5 12.5" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.5 7.5L12.5 12.5" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
