import React from 'react';
import { Link } from 'react-router-dom';

import { Button, ButtonSizes, ButtonVariants } from '../../components/button';
import URL from '../../utils/constants/URL';

import './index.scss';

function Dashboard() {
  return (
    <div className="dashboard-page">
      Welcome to Dashboard !!

      <Link to={URL.HOME}>
        <Button
          id="logout"
          label="__LOG_OUT"
          variant={ButtonVariants.PRIMARY}
          size={ButtonSizes.LARGE}
        />
      </Link>
    </div>
  );
}

export default Dashboard;
