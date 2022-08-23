import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import {
  NavigationList, NavigationFooterOptions,
} from '../../../utils/helpers/dashboard-helper';
import { Button, ButtonSizes, ButtonVariants } from '../../../components/button';
import URL from '../../../utils/constants/URL';
import NavList from '../../../components/navigation/nav-list';

import './index.scss';

function Sidebar({ header, selectedItem, setSelectedItem }) {
  const navigate = useNavigate();

  return (
    <aside className="sidebar-container">
      <div className="sidebar-header">{header}</div>
      <div className="sidebar">
        <NavList
          list={NavigationList}
          onClick={setSelectedItem}
          selectedItem={selectedItem}
        />
        <NavList
          list={NavigationFooterOptions}
          onClick={setSelectedItem}
          selectedItem={selectedItem}
        />
        <Button
          id="log-out"
          label="__LOG_OUT"
          variant={ButtonVariants.LINK}
          size={ButtonSizes.LARGE}
          onClick={() => navigate(URL.LOGIN)}
        />
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  header: PropTypes.string,
  selectedItem: PropTypes.string,
  setSelectedItem: PropTypes.func,
};

Sidebar.defaultProps = {
  header: '',
  selectedItem: '',
  setSelectedItem: () => {},
};

export default Sidebar;
