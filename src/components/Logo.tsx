import React from 'react';

export const Logo: React.FC<{ size?: number }> = ({ size = 32 }) => {
  const id = 'aethon-gradient';
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#FF8A1F" />
          <stop offset="60%" stopColor="#FFB86B" />
          <stop offset="100%" stopColor="#FFDDA6" />
        </linearGradient>
        <filter id="aethon-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#FF8A1F" floodOpacity="0.12" />
        </filter>
      </defs>

      <g filter="url(#aethon-shadow)">
        <rect x="2" y="2" width="44" height="44" rx="10" fill={`url(#${id})`} />
      </g>

      <path d="M15 33 L24 15 L33 33 Z" fill="#11131A" opacity="0.95" transform="translate(0,-1)" />
      <path d="M24 19 L20 28 L28 28 Z" fill={`url(#${id})`} opacity="0.95" />

    </svg>
  );
};

export default Logo;
