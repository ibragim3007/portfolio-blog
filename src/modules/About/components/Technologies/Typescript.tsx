import React from 'react';
import ItemCardLabel from '../../../../components/Cards/ItemCardLabel';

import TypeScriptIcon from '../../../../assets/typescript-icon-icon-1024x1024-vh3pfez8.png';
import { Image } from '../../../../shared/image/Image';
import { IMAGE_HEIGHT } from './constants/StyleConsts';

const Typescript = () => {
  return (
    <ItemCardLabel href={'https://www.typescriptlang.org/'} label={'Typescript'}>
      <Image src={TypeScriptIcon} height={IMAGE_HEIGHT} />
    </ItemCardLabel>
  );
};

export default Typescript;
