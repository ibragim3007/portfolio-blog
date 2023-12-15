import React from 'react';
import ItemCardLabel from '../../../../components/Cards/ItemCardLabel';

import GraphQL from '../../../../assets/GraphQL_Logo.svg.png';
import { Image } from '../../../../shared/image/Image';
import { IMAGE_HEIGHT } from './constants/StyleConsts';

const ApolloTech = () => {
  return (
    <ItemCardLabel href={'https://graphql.org/'} label={'GraphQL'}>
      <Image src={GraphQL} height={IMAGE_HEIGHT} />
    </ItemCardLabel>
  );
};

export default ApolloTech;
