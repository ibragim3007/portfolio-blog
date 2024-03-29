import React from 'react';
import Form from './Form/Form';
import { Card } from '../../../shared/ui/layout/Card';

const AddNewPost: React.FC = () => {
  return (
    <Card style={{ padding: 20, width: '100%' }}>
      <Form />
    </Card>
  );
};

export default AddNewPost;
