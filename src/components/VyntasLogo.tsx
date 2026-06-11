import React from 'react';

interface VyntasLogoProps {
  className?: string;
  size?: number;
  isNewsletter?: boolean;
}

export default function VyntasLogo({ className = '', size = 32, isNewsletter = false }: VyntasLogoProps) {
  // We represent the exact official logo with high-fidelity vector paths:
  // - DNA helix representing science and biotechnology, transitioning seamlessly at the top into blooming green leaves representing longevity and cellular vitality.
  return (
    <svg
      viewBox="0 0 100 120"
      width={size}
      height={size * 1.2}
      className={`shrink-0 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradients for the official brand look */}
        <linearGradient id="vyntas-dna-gradient" x1="50" y1="120" x2="50" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0b2c45" />    {/* Deep Navy/Teal bottom */}
          <stop offset="40%" stopColor="#145d70" />   {/* Mid Teal */}
          <stop offset="70%" stopColor="#2caa6c" />   {/* Radiant Emerald */}
          <stop offset="100%" stopColor="#5edb9c" />  {/* Fresh Green top */}
        </linearGradient>

        <linearGradient id="leaf-right-grad" x1="45" y1="65" x2="65" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e895c" />
          <stop offset="60%" stopColor="#3ca773" />
          <stop offset="100%" stopColor="#69ecac" />
        </linearGradient>

        <linearGradient id="leaf-left-grad" x1="45" y1="50" x2="35" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#166544" />
          <stop offset="100%" stopColor="#4de99c" />
        </linearGradient>

        {/* Shadow filter to give smooth visual distinction to crossover elements */}
        <filter id="crossover-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Horizontal DNA Base Pairs (Rungs) with rounded caps */}
      <g stroke="url(#vyntas-dna-gradient)" strokeWidth="2.5" strokeLinecap="round" opacity="0.85">
        {/* Bottom Loop Horizontal Rungs */}
        <line x1="39" y1="102" x2="61" y2="102" />
        <line x1="41" y1="96" x2="59" y2="96" />
        <line x1="44" y1="90" x2="56" y2="90" />
        <line x1="48" y1="84" x2="52" y2="84" />

        {/* Top Loop Horizontal Rungs */}
        <line x1="47" y1="72" x2="53" y2="72" />
        <line x1="43" y1="66" x2="57" y2="66" />
        <line x1="41" y1="60" x2="59" y2="60" />
        <line x1="40" y1="54" x2="60" y2="54" />
      </g>

      {/* DNA Strand Helix 1 (Flowing Left-to-Right-to-Left, Background layer) */}
      <path
        d="M 62 108 
           C 62 100, 50 96, 50 90 
           C 50 84, 62 80, 62 72 
           C 62 64, 50 60, 50 54"
        stroke="url(#vyntas-dna-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* DNA Strand Helix 2 (Intertwined Crossover, Foreground with subtle shadow) */}
      <path
        d="M 38 108 
           C 38 100, 50 96, 50 90 
           C 50 84, 38 80, 38 72 
           C 38 64, 50 60, 50 54"
        stroke="url(#vyntas-dna-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#crossover-shadow)"
      />

      {/* Connecting Stem to Leaf System */}
      <path
        d="M 50 54 C 50 45, 52 40, 50 25"
        stroke="url(#vyntas-dna-gradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Leaf Left (Elegant curved teardrop pointing up-left) */}
      <path
        d="M 49 46 
           C 41 43, 39 34, 43 27 
           C 46 22, 50 29, 49 38 Z"
        fill="url(#leaf-left-grad)"
      />
      {/* Mini vein in left leaf */}
      <path
        d="M 49 38 Q 45 34, 44 29"
        stroke="#ffffff"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Leaf Right (Larger primary leaf pointing up-right) */}
      <path
        d="M 50 42 
           C 56 36, 61 28, 59 13 
           C 55 9, 47 16, 49 34 Z"
        fill="url(#leaf-right-grad)"
      />
      {/* Central spine/vein on Right Leaf (As shown in the brand asset) */}
      <path
        d="M 50 36 
           C 51 28, 53 21, 55 14"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
