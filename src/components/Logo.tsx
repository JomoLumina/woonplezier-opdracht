import React from 'react';
import type { FC } from 'react';
import { HeaderIconImage } from 'src/utils/Images';

interface LogoProps {
  [key: string]: any;
}

const Logo: FC<LogoProps> = (props) => {
  return (
    <img
      alt="Logo"
      src={HeaderIconImage}
      {...props}
    />
  );
}

export default Logo;
