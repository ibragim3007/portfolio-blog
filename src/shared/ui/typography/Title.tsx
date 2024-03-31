import styled from 'styled-components';
import { colors, variants } from './interface/TitleInterfaces';
import { detectTitleSize } from './helpers/detectTitleSize';
import { detectColor } from './helpers/detectColor';

interface TitleProps {
  variant?: variants;
  error?: boolean;
  color?: colors;
}

export const Title = styled.p<TitleProps>`
  color: ${(props) => detectColor(props.color)};
  font-size: ${(props) => detectTitleSize(props.variant || 'text')};
  font-weight: ${(props) => (props.variant === 'title' ? 'bold' : 'normal')};
  opacity: ${(props) => (props.variant === 'subtitle' ? 0.9 : 1)};
  letter-spacing: 0.9px;
  margin: 0px;
  padding: 0px;
  line-height: ${(props) => (props.variant === 'text' ? 1.7 : 1)};
`;
