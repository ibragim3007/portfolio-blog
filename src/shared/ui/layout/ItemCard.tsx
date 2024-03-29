import styled from '@emotion/styled';

interface CardProps {
  padding?: number | string;
}

export const ItemCard = styled.div<CardProps>`
  background-color: rgb(var(--background-rgb));
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color-high);
  cursor: pointer;
`;
