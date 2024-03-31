import React from 'react';
import ItemCardLabel from '../../../../components/Cards/ItemCardLabel';
import { Image } from '../../../../shared/ui/image/Image';
import { IMAGE_HEIGHT } from './constants/StyleConsts';
import ReduxIcon from '../../../../app/assets/redux-logo.svg';

const ReduxToolkit = () => {
  return (
    <ItemCardLabel href={'https://graphql.org/'} label={'Redux TK'}>
      <Image style={{ background: '#593d88' }} src={ReduxIcon} height={IMAGE_HEIGHT} />
    </ItemCardLabel>
  );
};

export default ReduxToolkit;
