import { Dropdown, Grid, Menu, MenuButton, MenuItem } from '@mui/joy';
import IconButton from '@mui/joy/IconButton';
import React from 'react';
import { Title } from '../../shared/typography/Title';
import Avatar from '../Avatar/Avatar';
import { getTimeUSA } from '../../helpers/utils/ToTime';
import MoreVert from '@mui/icons-material/MoreVert';
import { useAppSelector } from '../../hooks/redux/reduxHooks';

interface HeaderCardProps {
  title: string;
  createDate: Date;
}

export const HeaderCard: React.FC<HeaderCardProps> = ({ title, createDate }) => {
  const me = useAppSelector(state => state.meReducer.me);
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid container alignItems="center" gap={3}>
        <Avatar url="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg" />
        <Title variant="title">{title}</Title>
      </Grid>
      <Grid container alignItems="center" gap={2}>
        <Title variant="subtitle">{getTimeUSA(createDate)}</Title>
        {me?.role === 'ADMIN' && (
          <Dropdown>
            <MenuButton slotProps={{ root: { variant: 'outlined', color: 'neutral' } }} slots={{ root: IconButton }}>
              <MoreVert />
            </MenuButton>
            <Menu>
              <MenuItem color="danger">Delete</MenuItem>
              <MenuItem>Edit</MenuItem>
            </Menu>
          </Dropdown>
        )}
      </Grid>
    </Grid>
  );
};
