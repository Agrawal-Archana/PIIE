import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import NavList from '../../components/navigation/nav-list';
import { Button, ButtonSizes, ButtonVariants } from '../../components/button';
import URL from '../../utils/constants/URL';
import { NavigationList } from '../../utils/helpers/dashboard-helper';

import './index.scss';

function Dashboard() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(NavigationList[0].id);

  const onClick = (id) => {
    setSelectedItem(id);
    navigate(`/dashboard/${id}`);
  };

  return (
    <div className="dashboard-page">
      <aside className="sidebar-container">
        <div className="sidebar-header">Untitled UI</div>
        <div className="sidebar">
          <NavList
            list={NavigationList}
            onClick={onClick}
            selectedItem={selectedItem}
          />
          {/* <NavList */}
          {/*  list={NavigationFooterOptions} */}
          {/*  onClick={onClick} */}
          {/*  selectedItem={selectedItem} */}
          {/* /> */}
          <Button
            id="log-out"
            label="__LOG_OUT"
            variant={ButtonVariants.LINK}
            size={ButtonSizes.LARGE}
            onClick={() => navigate(URL.LOGIN)}
          />
        </div>
      </aside>
      <Outlet />
    </div>
  );
}

export default Dashboard;
