import React from 'react';
import { Image } from '../../../../shared/image/Image';
import NodeJsIcon from '../../../../assets/nodejs.png';
import ItemCardLabel from '../../../../components/Cards/ItemCardLabel';
import { IMAGE_HEIGHT } from './constants/StyleConsts';

const NodeJSTech: React.FC = () => {
  return (
    <ItemCardLabel href={'https://nodejs.org'} label="NodeJS">
      <Image height={IMAGE_HEIGHT} src={NodeJsIcon} />
    </ItemCardLabel>
  );
};

export default NodeJSTech;
