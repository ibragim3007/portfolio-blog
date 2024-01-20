import { Stack } from '@mui/joy';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { config } from '../../router/routerConfig';
import { Card } from '../../shared/layout/Card';
import { HeaderCard } from '../PostCard/HeaderCard';
import { PreviewCardInterface } from './graphql/interface/PreviewCardInterface';

interface PreviewCardProps {
  post: PreviewCardInterface;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ post }) => {
  return (
    <NavLink to={`${config.post}/${post.id}`} style={{ width: '100%' }}>
      <Card style={{ width: '100%' }}>
        <Stack spacing={2}>
          <HeaderCard post={post} />
        </Stack>
      </Card>
    </NavLink>
  );
};

export default PreviewCard;
