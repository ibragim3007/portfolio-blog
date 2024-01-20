import { Stack } from '@mui/joy';
import React from 'react';
import { HeaderCard } from '../PostCard/HeaderCard';
import { PreviewCardInterface } from './graphql/interface/PreviewCardInterface';
import { NavLink } from 'react-router-dom';
import { Card } from '../../shared/layout/Card';
import { config } from '../../router/routerConfig';

interface PreviewCardProps {
  post: PreviewCardInterface;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ post }) => {
  return (
    <NavLink to={`${config.post}/${post.id}`} style={{ width: '100%' }}>
      <Card style={{ width: '100%' }}>
        <Stack spacing={2}>
          <HeaderCard title={post.title} createDate={post.createDate} />
        </Stack>
      </Card>
    </NavLink>
  );
};

export default PreviewCard;
