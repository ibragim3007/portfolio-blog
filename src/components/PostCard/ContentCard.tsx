import React from 'react';
import { Title } from '../../shared/typography/Title';

interface ContentCardProps {
  content?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  return (
    <Title variant="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nulla rem facilis corrupti exercitationem, ullam
      expedita voluptas eaque unde porro doloribus, commodi quis quisquam voluptates quaerat, vero quos architecto non
      fugit eligendi! Iure incidunt modi repudiandae ullam impedit doloremque porro!
    </Title>
  );
};

export default ContentCard;
