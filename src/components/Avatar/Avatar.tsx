import React from 'react';

interface AvatarProps {
  url: string;
}

const Avatar: React.FC<AvatarProps> = ({ url }) => {
  return <img src={url} style={{ borderRadius: 50, width: 50, height: 50 }} />;
};

export default Avatar;
