import React from 'react';
import { Image } from '../../../../shared/ui/image/Image';
import ReactIcon from '../../../../app/assets/React-icon.svg.png';
import ItemCardLabel from '../../../../components/Cards/ItemCardLabel';
import { IMAGE_HEIGHT } from './constants/StyleConsts';

const ReactTech: React.FC = () => {
  return (
    <ItemCardLabel href={'https://react.dev/'} label="React">
      <Image height={IMAGE_HEIGHT} src={ReactIcon} />
    </ItemCardLabel>
  );
};

export default ReactTech;
