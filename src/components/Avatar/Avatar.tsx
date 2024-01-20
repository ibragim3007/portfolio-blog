import React from 'react';

interface AvatarProps {
  url: string;
  size?: 1 | 2 | 3;
}

const Avatar: React.FC<AvatarProps> = ({ url, size }) => {
  const pix = size ? size * 50 : 50;

  return <img src={url} style={{ borderRadius: 50, width: pix, height: pix }} />;
};

export default Avatar;
