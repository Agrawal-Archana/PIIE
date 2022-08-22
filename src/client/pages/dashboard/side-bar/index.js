import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import {
  NavigationList, NavigationFooterOptions,
} from '../../../utils/helpers/dashboard-helper';
import { NavItem } from '../../../components/navigation/nav-item';
import { Button, ButtonSizes, ButtonVariants } from '../../../components/button';
import URL from '../../../utils/constants/URL';

import './index.scss';

function Sidebar({ header, selectedItem, setSelectedItem }) {
  const navigate = useNavigate();

  return (
    <aside className="sidebar-container">
      <div className="sidebar-header">{header}</div>
      <div className="sidebar">
        <div className="sidebar-menu">
          {NavigationList.map(
            ({
              id, label, expandable, icon,
            }) => (
              <NavItem
                key={id}
                id={id}
                label={label}
                onClick={() => setSelectedItem(id)}
                expandable={expandable}
                icon={icon}
                isExpanded={id === selectedItem}
              />
            ),
          )}
        </div>
        <div className="sidebar-footer">
          {NavigationFooterOptions.map(
            ({
              id, label, expandable, icon,
            }) => (
              <NavItem
                key={id}
                id={id}
                label={label}
                onClick={() => setSelectedItem(id)}
                expandable={expandable}
                icon={icon}
                isExpanded={id === selectedItem}
              />
            ),
          )}
          <Button
            id="log-out"
            label="__LOG_OUT"
            variant={ButtonVariants.LINK}
            size={ButtonSizes.LARGE}
            onClick={() => navigate(URL.LOGIN)}
          />
        </div>
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
