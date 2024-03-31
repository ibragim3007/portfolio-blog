import styled from 'styled-components';
import { detectColorInput } from './helpers/detectColorInput';
import { InputColorType } from './interface/ColorVariants';

interface TextareaProps {
  fullWidth?: boolean;
  color?: InputColorType;
}

export const Textarea = styled.textarea<TextareaProps>`
  border-radius: var(--border-radius);
  padding: 13px;
  font-size: 16px;
  background-color: var(--card-rgb);
  border: 1px solid var(--border-color);
  border-color: ${(props) => detectColorInput(props.color || 'primary')};
  outline: none;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  color: var(--text-color);
  resize: vertical;
  max-height: 600px;
  min-height: 90px;
  transition: 0.1s ease;
  &:focus {
    filter: brightness(110%);

    outline: 2px solid var(--link-color);
  }
`;
