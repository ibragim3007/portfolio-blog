import React from 'react';
import { Title } from '../../shared/ui/typography/Title';

interface ContentCardProps {
  content?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  return <Title variant="text">{content}</Title>;
};

export default ContentCard;
