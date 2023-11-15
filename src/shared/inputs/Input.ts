import styled from 'styled-components';

interface InputProps {
  fullWidth?: boolean;
}

export const Input = styled.input<InputProps>`
  border-radius: var(--border-radius);
  padding: 13px 25px;
  font-size: 16px;
  background-color: var(--card-rgb);
  border: 1px solid var(--border-color);
  outline: none;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  color: var(--text-color);
  transition: 0.1s ease;
  &:focus {
    filter: brightness(150%);
  }
`;
