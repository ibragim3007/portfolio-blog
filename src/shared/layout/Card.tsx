import styled from '@emotion/styled';

interface CardProps {
  padding?: number | string;
}

export const Card = styled.div<CardProps>`
  background-color: var(--card-rgb);
  padding: ${props => (props.padding ? props.padding : 0)};
  border-radius: 15px;
  /* border: 1px solid var(--border-color); */
`;
