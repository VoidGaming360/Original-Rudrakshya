import React from 'react';
import { Leaf } from 'lucide-react';

interface LogoProps {
  white?: boolean;
}

const Logo: React.FC<LogoProps> = ({ white = false }) => {
  return (
    <div className="flex items-center">
      <Leaf className={`${white ? 'text-amber-200' : 'text-amber-600'} mr-2`} size={24} />
      <div className="font-serif">
        <span className={`font-bold text-xl ${white ? 'text-amber-100' : 'text-amber-900'}`}>
          Rudraksha
        </span>
        <span className={`font-light text-xl ml-1 ${white ? 'text-amber-200' : 'text-amber-700'}`}>
          Beads
        </span>
      </div>
    </div>
  );
};

export default Logo;