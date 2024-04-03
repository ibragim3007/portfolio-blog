import { useBreadCrumbs } from '@/shared/hooks/breadcrumbs/useBreadCrumbs';
import { Card } from '@/shared/ui/layout/Card';
import { Title } from '@/shared/ui/typography/Title';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Breadcrumbs, Link } from '@mui/joy';
import { Grid } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface LayoutWindowProps extends PropsWithChildren {
  value?: string;
}

const LayoutWindow: React.FC<LayoutWindowProps> = ({ value, children }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const crumbs = useBreadCrumbs(pathname);

  const clickBackButton = () => {
    navigate(-1);
  };

  return (
    <Grid container gap={3}>
      <Card
        style={{
          width: 50,
          padding: '0px 0px',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
        onClick={clickBackButton}
      >
        <ArrowBackIcon />
      </Card>
      <Card style={{ padding: 0, background: 'transparent' }}>
        <Breadcrumbs>
          {crumbs.map((crumb) => (
            <Link key={crumb.item} color="neutral" href={`/${crumb.path}`}>
              {crumb.item}
            </Link>
          ))}
        </Breadcrumbs>
      </Card>

      <Grid xs={12}>{children}</Grid>
    </Grid>
  );
};

export default LayoutWindow;
