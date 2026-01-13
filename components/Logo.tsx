import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showTagline = false }) => {
  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
        <span style={{ color: '#2DD4BF' }}>arty</span>
        <span style={{ color: '#60A5FA' }}>do</span>
      </div>
      {showTagline && (
        <span className="text-[#0F4C81] text-sm md:text-base font-medium mt-1 tracking-wide">
          Empowering Creative Ventures
        </span>
      )}
    </div>
  );
};

export default Logo;