import React from 'react';
import ItemCardLabel from '../../../../components/Cards/ItemCardLabel';

import MuiIcon from '../../../../app/assets/mui-logo.png';
import { Image } from '../../../../shared/ui/image/Image';
import { IMAGE_HEIGHT } from './constants/StyleConsts';

const MuiTech = () => {
  return (
    <ItemCardLabel href="https://mui.com" label={'MUI'}>
      <Image src={MuiIcon} height={IMAGE_HEIGHT} />
    </ItemCardLabel>
  );
};

export default MuiTech;
