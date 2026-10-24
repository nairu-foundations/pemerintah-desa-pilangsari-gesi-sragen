import React from 'react';

interface WaveDividerProps {
  fillColor?: string;
  bgColor?: string;
  flip?: boolean;
  className?: string;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  fillColor = '#FFFBE6',
  bgColor = 'transparent',
  flip = false,
  className = ''
}) => {
  return (
    <div 
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-8 sm:h-12 md:h-16 ${flip ? 'rotate-180' : ''}`}
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
