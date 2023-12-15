import React from 'react';
import { Image } from '../../../../shared/image/Image';
import ReactIcon from '../../../../assets/React-icon.svg.png';
import ItemCardLabel from '../../../../components/Cards/ItemCardLabel';
import { IMAGE_HEIGHT } from './constants/StyleConsts';

const ReactTech: React.FC = () => {
  return (
    <ItemCardLabel label="React">
      <Image height={IMAGE_HEIGHT} src={ReactIcon} />
    </ItemCardLabel>
  );
};

export default ReactTech;
