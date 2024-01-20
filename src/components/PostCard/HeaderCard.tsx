import MoreVert from '@mui/icons-material/MoreVert';
import { Chip, Dropdown, Grid, Menu, MenuButton, MenuItem } from '@mui/joy';
import IconButton from '@mui/joy/IconButton';
import React from 'react';
import { getTimeUSA } from '../../helpers/utils/ToTime';
import ClientProvider from '../../security/ClientProvider';
import { Title } from '../../shared/typography/Title';
import Avatar from '../Avatar/Avatar';
import { PostResponseInterface } from '../../GraphQL/@post/interfaces/PostResponseInterface';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { NavLink } from 'react-router-dom';
import { config } from '../../router/routerConfig';

interface HeaderCardProps {
  post: Omit<PostResponseInterface, 'article'>;
}

export const HeaderCard: React.FC<HeaderCardProps> = ({ post }) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid container alignItems="center" gap={3}>
        <NavLink to={`${config.user}/${post.author.id}`}>
          <Avatar url="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg" />
        </NavLink>
        <Grid container flexDirection="column" gap={1}>
          <Title variant="title">{post.title}</Title>
          <Chip color="primary" variant="soft" startDecorator={<FavoriteIcon />}>
            {post.likedBy.length}
          </Chip>
        </Grid>
      </Grid>
      <Grid container alignItems="center" gap={2}>
        <Title variant="subtitle">{getTimeUSA(post.createDate)}</Title>
        <ClientProvider isShow={false}>
          <Dropdown>
            <MenuButton slotProps={{ root: { variant: 'outlined', color: 'neutral' } }} slots={{ root: IconButton }}>
              <MoreVert />
            </MenuButton>
            <Menu>
              <MenuItem color="danger">Delete</MenuItem>
              <MenuItem>Edit</MenuItem>
            </Menu>
          </Dropdown>
        </ClientProvider>
      </Grid>
    </Grid>
  );
};
