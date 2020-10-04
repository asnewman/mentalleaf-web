import styled from 'styled-components';
import { COLORS } from '../../../constants';

const AuthenticationBox = styled.div`
  position: relative;
  float:left;
  width: 60%;
  height: 100vh;
  background-color: #FFFFFF;

  label {
    margin-bottom: 3px;
  }

  h2 {
    margin: 0 0 10px 0;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 300px;
  width: 300px;
`;

const CreateAccountBtn = styled.button`
  color: ${COLORS.DARK_GREEN};
  text-decoration: underline;
  border: none;
  background-color: transparent;
  display: block;
  padding: 0;
  cursor: pointer;
  margin-bottom: 18px;
`;

const FailureMessage = styled.p`
  color: red;
`;

export {
  AuthenticationBox,
  CreateAccountBtn,
  Content,
  FailureMessage
};
