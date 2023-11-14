import { Row, Space } from 'antd';
import React from 'react';
import { config } from '../../../router/routerConfig';
import LinkItem from './LinkItem';

const NavLinks = () => {
  return (
    <Row>
      <Space size="large">
        <LinkItem to={config.home}>Home</LinkItem>
        <LinkItem to={config.about}>About</LinkItem>
      </Space>
    </Row>
  );
};

export default NavLinks;
