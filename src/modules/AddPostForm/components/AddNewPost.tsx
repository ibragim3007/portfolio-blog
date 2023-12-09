import React from 'react';
import Form from './Form/Form';
import { Card } from '../../../shared/layout/Card';

const AddNewPost = () => {
  return (
    <Card style={{ padding: 20, width: '100%' }}>
      <Form />
    </Card>
  );
};

export default AddNewPost;
