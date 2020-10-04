// import React from 'react';
import styled from 'styled-components';

const TextInput = styled.input`
  width: ${props => (props.size === 'long' ? '240px' : '120px')};
  padding: 5px;
  display: block;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 1em;
  border-radius: 3px;
  border: 1px solid #8c8c8c;
`;

export default TextInput;
