import styled from 'styled-components';

import { COLORS } from '../../constants';

const WelcomeMessage = styled.div`
  width: 40%;
  float: left;
  height: 100vh;
`;

const WelcomeMessageTitle = styled.div`
  font-size: 50px;
  font-weight: 600;
`;

const WelcomeMessageContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
  color: ${COLORS.LIGHT_GREEN};
  width: 40%;
  text-align: center;
`;

export {
  WelcomeMessage,
  WelcomeMessageContent,
  WelcomeMessageTitle
};
