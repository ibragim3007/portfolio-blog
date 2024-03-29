import MoreVert from '@mui/icons-material/MoreVert';
import { Chip, Dropdown, Grid, Menu, MenuButton, MenuItem } from '@mui/joy';
import IconButton from '@mui/joy/IconButton';
import React from 'react';
import { getTimeUSA } from '../../shared/helpers/ToTime';
import ClientProvider from '../../shared/security/ClientProvider';
import { Title } from '../../shared/ui/typography/Title';
import Avatar from '../Avatar/Avatar';
import { PostResponseInterface } from '../../shared/graphQL/@post/interface/PostResponseInterface';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';
import { config } from '../../app/router/routerConfig';
import { useDeletePost } from '@/shared/hooks/entities/post/useDeletePost';
import LoadingCircle from '../Loading/LoadingCircle';

interface HeaderCardProps {
  post: Omit<PostResponseInterface, 'article'>;
  showTools?: boolean;
}

export const HeaderCard: React.FC<HeaderCardProps> = ({ post, showTools }) => {
  const { deletePostFunction, loading } = useDeletePost(post.id);
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid container alignItems="center" gap={3}>
        <NavLink to={`${config.user}/${post.author.id}`}>
          <Grid gap={1} container flexDirection="column" alignItems="center" justifyContent="center">
            <Avatar url="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg" />
            <Title variant="subtitle" style={{ color: '#8e8e8e', maxWidth: 50 }}>
              {post.author.lastName}
            </Title>
          </Grid>
        </NavLink>
        <Grid container flexDirection="column" gap={1}>
          <Title variant="title">{post.title}</Title>
          <Grid container gap={1}>
            <Chip color="primary" variant="soft" startDecorator={<FavoriteIcon />}>
              {post.likesAmount}
            </Chip>
            <Chip color="neutral" variant="soft" startDecorator={<CommentIcon />}>
              {(post.comments || []).length}
            </Chip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container alignItems="center" gap={2}>
        <Title variant="subtitle">{getTimeUSA(post.createDate)}</Title>
        <ClientProvider role="USER" isShow={showTools}>
          <Dropdown>
            <MenuButton slotProps={{ root: { variant: 'outlined', color: 'neutral' } }} slots={{ root: IconButton }}>
              {loading ? <LoadingCircle /> : <MoreVert />}
            </MenuButton>
            <Menu>
              <MenuItem onClick={() => void deletePostFunction()} color="danger">
                Delete
              </MenuItem>
              <MenuItem>Edit</MenuItem>
            </Menu>
          </Dropdown>
        </ClientProvider>
      </Grid>
    </Grid>
  );
};
