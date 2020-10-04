import styled from 'styled-components';
import { COLORS } from '../../constants';

const Button = styled.button`
  font-size: 1em;
  padding: 10px;
  color: ${COLORS.LIGHT_GREEN};
  background-color: ${COLORS.DARK_GREEN};
  border: none;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button;
