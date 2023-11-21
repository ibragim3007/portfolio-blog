import { detectColorInput } from './helpers/detectColorInput';
import styled from 'styled-components';
import { InputColorType } from './interface/ColorVariants';

interface InputProps {
  fullWidth?: boolean;
  color?: InputColorType;
}

export const Input = styled.input<InputProps>`
  border-radius: var(--border-radius);
  padding: 13px 13px;
  font-size: 16px;
  background-color: var(--card-rgb);
  border: 1px solid var(--border-color);
  border-color: ${props => detectColorInput(props.color || 'primary')};
  outline: none;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};
  color: var(--text-color);
  transition: 0.1s ease;
  &:focus {
    filter: brightness(110%);
    transform: scale(1.03);
  }
`;
