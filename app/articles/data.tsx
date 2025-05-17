import React from 'react';

export const articles = [
  {
    title: 'Anxiety',
    file: 'anxiety.tex',
    image: '/images/anxiety.jpg',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    title: 'Stress',
    file: 'stress.tex',
    image: '/images/stress.jpg',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white">
        <rect x="4" y="4" width="16" height="16" rx="4" />
      </svg>
    ),
  },
  {
    title: 'Depression',
    file: 'depression.tex',
    image: '/images/depression.jpg',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white">
        <path d="M4 20h16M4 4h16M4 4v16M20 4v16" />
      </svg>
    ),
  },
]; 