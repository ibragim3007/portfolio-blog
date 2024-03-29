import React from 'react';
import { Image } from '../../../../shared/ui/image/Image';
import PostgreIcon from '../../../../app/assets/postgre.png';
import ItemCardLabel from '../../../../components/Cards/ItemCardLabel';
import { IMAGE_HEIGHT } from './constants/StyleConsts';

const PostgreTech: React.FC = () => {
  return (
    <ItemCardLabel href={'https://www.postgresql.org/'} label="Postgre">
      <Image height={IMAGE_HEIGHT} src={PostgreIcon} />
    </ItemCardLabel>
  );
};

export default PostgreTech;
