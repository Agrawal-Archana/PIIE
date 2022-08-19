import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, ButtonSizes, ButtonVariants } from '../../components/button';
import URL from '../../utils/constants/URL';

import './index.scss';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div>Welcome to home page !!</div>
      <div className="routes">
        <Button
          id="login"
          label="__LOGIN"
          variant={ButtonVariants.PRIMARY}
          size={ButtonSizes.LARGE}
          onClick={() => navigate(URL.LOGIN)}
        />
      </div>
    </div>
  );
}

export default Home;
