import React from 'react';

import * as style from './LandingPage.style';
import AuthenticationBox from './LoginBox/AuthenticationBox';

const LandingPage = () => {
  return (
    <div>
      <style.WelcomeMessage>
        <style.WelcomeMessageContent>
          <style.WelcomeMessageTitle>Mental Leaf</style.WelcomeMessageTitle>
          Explore your mind, <b>privately</b>.
        </style.WelcomeMessageContent>
      </style.WelcomeMessage>
      <AuthenticationBox />
    </div>
  );
};

export default LandingPage;
