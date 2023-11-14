import styled from 'styled-components';
import { variants } from './interfaces/TitleInterfaces';
import { detectTitleSize } from './helpers/detectTitleSize';

interface TitleProps {
  variant?: variants;
}

export const Title = styled.p<TitleProps>`
  color: var(--text-color);
  font-size: ${props => detectTitleSize(props.variant || 'title')};
  font-weight: ${props => (props.variant === 'title' ? 'bold' : 'normal')};
  letter-spacing: 0.9px;
  line-height: 22px;
`;
