import React from 'react';
import { Card } from '../../shared/layout/Card';
import { HeaderCard } from './HeaderCard';
import ContentCard from './ContentCard';

const PostCard = () => {
  return (
    <Card>
      <HeaderCard />
      <ContentCard />
    </Card>
  );
};

export default PostCard;
