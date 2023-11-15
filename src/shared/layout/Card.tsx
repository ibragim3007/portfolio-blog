import styled from '@emotion/styled';

interface CardProps {
  padding?: number | string;
}

export const Card = styled.div<CardProps>`
  background-color: var(--card-rgb);
  padding: ${props => (props.padding ? props.padding : '20px 50px 20px 50px')};
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
`;
