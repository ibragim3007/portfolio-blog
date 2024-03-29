import styled from '@emotion/styled';

interface CardProps {
  padding?: number | string;
}

export const Card = styled.div<CardProps>`
  background-color: var(--card-rgb);
  padding: ${(props) => (props.padding ? props.padding : '20px 40px')};
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  transition: 0.3s ease;
`;
