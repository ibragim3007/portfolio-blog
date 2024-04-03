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
import { NavLink, useNavigate } from 'react-router-dom';
import CommentIcon from '@mui/icons-material/Comment';
import { config } from '../../app/router/routerConfig';
import { useDeletePost } from '@/shared/hooks/entities/post/useDeletePost';
import LoadingCircle from '../Loading/LoadingCircle';
import { motion } from 'framer-motion';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useShare } from '@/shared/hooks/entities/post/useSharePost';
interface HeaderCardProps {
  post: Omit<PostResponseInterface, 'article'>;
  showTools?: boolean;
  preview?: boolean;
}

export const HeaderCard: React.FC<HeaderCardProps> = ({ post, showTools, preview }) => {
  const { deletePostFunction, loading } = useDeletePost(post.id);
  const share = useShare();
  const navigate = useNavigate();

  const pressEditButton = () => {
    navigate('edit');
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid container alignItems="center" gap={3}>
        <motion.div
          style={{ padding: '5px 0px' }}
          whileHover={{ scale: 1.05, backgroundColor: '#8e8e8e38', borderRadius: 10, padding: '5px 5px' }}
        >
          <NavLink to={`${config.user}/${post.author.id}`}>
            <Grid gap={1} container flexDirection="column" alignItems="center" justifyContent="center">
              <Avatar url="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg" />
              <Title variant="subtitle" style={{ color: '#8e8e8e', maxWidth: 50 }}>
                {post.author.lastName}
              </Title>
            </Grid>
          </NavLink>
        </motion.div>
        <Grid container flexDirection="column" gap={1}>
          <Title variant="title">{post.title}</Title>
          <Grid container gap={1}>
            <Chip color="neutral" variant="soft" startDecorator={<VisibilityIcon />}>
              -
            </Chip>
            <Chip color="primary" variant="soft" startDecorator={<FavoriteIcon />}>
              {post.likesAmount}
            </Chip>
            <Chip color="warning" variant="soft" startDecorator={<CommentIcon />}>
              {post.commentsAmount}
            </Chip>
          </Grid>
        </Grid>
      </Grid>
      <Grid container alignItems="center" gap={2}>
        <Title variant="subtitle">{getTimeUSA(post.createDate)}</Title>
        {!preview && (
          <Dropdown>
            <MenuButton slotProps={{ root: { variant: 'outlined', color: 'neutral' } }} slots={{ root: IconButton }}>
              {loading ? <LoadingCircle /> : <MoreVert />}
            </MenuButton>

            <Menu>
              <ClientProvider role="USER" isShow={showTools}>
                <MenuItem onClick={() => void deletePostFunction()} color="danger">
                  Delete
                </MenuItem>
                <MenuItem onClick={pressEditButton}>Edit</MenuItem>
              </ClientProvider>
              <MenuItem onClick={() => void share()}>Share</MenuItem>
            </Menu>
          </Dropdown>
        )}
      </Grid>
    </Grid>
  );
};
