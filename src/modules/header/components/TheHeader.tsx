import { Row } from 'antd';
import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';

const TheHeader = () => {
  return (
    <Row
      style={{
        backgroundColor: '#e2e2e2',
        alignItems: 'center',
        padding: '0px 50px',
        borderBottom: '1px solid #a0a0a0',
      }}
      justify="space-between"
    >
      <Logo />
      <NavLinks />
    </Row>
  );
};

export default TheHeader;
