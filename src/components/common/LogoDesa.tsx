import React from 'react';
import { DESA_IMAGES } from '../../constants/images';

interface LogoDesaProps {
  className?: string;
  size?: number;
}

export const LogoDesa: React.FC<LogoDesaProps> = ({ 
  className = 'h-12 w-auto', 
  size = 52 
}) => {
  return (
    <img
      src={DESA_IMAGES.brand.logoPng}
      alt="Lambang Resmi Kabupaten Sragen - Desa Pilangsari"
      style={{ height: size, width: 'auto' }}
      className={`shrink-0 object-contain drop-shadow-sm select-none ${className}`}
      loading="eager"
    />
  );
};
