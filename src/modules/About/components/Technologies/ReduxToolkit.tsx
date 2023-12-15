import React from 'react';
import ItemCardLabel from '../../../../components/Cards/ItemCardLabel';
import { Image } from '../../../../shared/image/Image';
import { IMAGE_HEIGHT } from './constants/StyleConsts';
import ReduxIcom from '../../../../assets/redux_white.svg';

const ReduxToolkit = () => {
  return (
    <ItemCardLabel href={'https://graphql.org/'} label={'Redux TK'}>
      <Image style={{ background: '#593d88' }} src={ReduxIcom} height={IMAGE_HEIGHT} />
    </ItemCardLabel>
  );
};

export default ReduxToolkit;
