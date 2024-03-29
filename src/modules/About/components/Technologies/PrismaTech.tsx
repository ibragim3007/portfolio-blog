import React from 'react';
import { Image } from '../../../../shared/ui/image/Image';
import PrismaIcon from '../../../../app/assets/prismaicon.png';
import ItemCardLabel from '../../../../components/Cards/ItemCardLabel';
import { IMAGE_HEIGHT } from './constants/StyleConsts';

const PrismaTech: React.FC = () => {
  return (
    <ItemCardLabel href={'https://www.prisma.io/'} label="Prisma">
      <Image height={IMAGE_HEIGHT} src={PrismaIcon} />
    </ItemCardLabel>
  );
};

export default PrismaTech;
