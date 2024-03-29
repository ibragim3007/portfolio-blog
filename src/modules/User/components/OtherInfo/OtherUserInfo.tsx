import React from 'react';
import { useParams } from 'react-router-dom';
import { useOtherInfo } from './useOtherInfo';
import { Title } from '../../../../shared/ui/typography/Title';
import LoadingWrapper from '../../../../components/Loading/LoadingWrapper';
import { Card } from '../../../../shared/ui/layout/Card';
import Avatar from '../../../../components/Avatar/Avatar';
import { Grid } from '@mui/joy';
import { getTimeUSA } from '../../../../shared/helpers/ToTime';
import PostCard from '../../../../components/PostCard/PostCard';

const OtherUserInfo = () => {
  const { userId } = useParams();
  const { data, loading } = useOtherInfo(userId);

  console.log(data?.writtenPosts);

  if (loading) return <LoadingWrapper />;

  return (
    <Grid gap={3} style={{ position: 'relative' }} container justifyContent="center">
      <Card style={{ width: '60%' }}>
        <Grid container justifyContent="center">
          <div style={{ position: 'absolute', top: -50 }}>
            <Avatar size={2} url={'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg'} />
          </div>
          <Grid container style={{ height: 120 }} alignItems="center" gap={1}>
            <Title variant="title">{data?.firstName}</Title>
            <Title variant="title">{data?.lastName}</Title>
            {data?.lastOnline && <Title variant="title">{getTimeUSA(data?.lastOnline)}</Title>}
          </Grid>
        </Grid>
      </Card>
      <Grid container gap={2} style={{ width: '100%' }}>
        {data?.writtenPosts.map(post => {
          return <PostCard key={post.id} post={post} />;
        })}
      </Grid>
    </Grid>
  );
};

export default OtherUserInfo;
