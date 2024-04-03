import { Stack } from '@mui/joy';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { config } from '../../app/router/routerConfig';
import { Card } from '../../shared/ui/layout/Card';
import { HeaderCard } from '../PostCard/HeaderCard';
import { PreviewCardInterface } from './graphql/interface/PreviewCardInterface';

interface PreviewCardProps {
  post: PreviewCardInterface;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ post }) => {
  return (
    <Card padding={'0px 20px'} style={{ width: '100%' }}>
      <NavLink to={`${config.post}/${post.id}`} style={{ width: '100%', padding: '20px 40px' }}>
        <Stack spacing={2}>
          <HeaderCard post={post} showTools={false} preview />
        </Stack>
      </NavLink>
    </Card>
  );
};

export default PreviewCard;
