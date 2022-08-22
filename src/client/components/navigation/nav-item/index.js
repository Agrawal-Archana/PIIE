import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import Icon from '../../icon';
import { IconSizes, IconColors } from '../../icon/icons-constants';

import './index.scss';

const NavItemTheme = {
  GRAY_LIGHT: 'gray-light',
  GRAY_DARK: 'gray-dark',
  PRIMARY_DARK: 'primary-dark',
  PRIMARY_LIGHT: 'primary-light',
};

function NavItem({
  id, label, onClick, expandable, icon, isExpanded, theme,
}) {
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      onClick(id);
    }
  };

  const classNames = clsx('nav-item', {
    [NavItemTheme.PRIMARY_LIGHT]: theme === NavItemTheme.PRIMARY_LIGHT,
    [NavItemTheme.PRIMARY_DARK]: theme === NavItemTheme.PRIMARY_DARK,
    [NavItemTheme.GRAY_DARK]: theme === NavItemTheme.GRAY_DARK,
    [NavItemTheme.GRAY_LIGHT]: theme === NavItemTheme.GRAY_LIGHT,
  });

  return (
    <div
      className={classNames}
      role="button"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onClick={() => onClick(id)}
    >
      {icon && (
      <div className="nav-item-icon">
        <Icon
          color={IconColors.GREY}
          type={icon}
          size={IconSizes.LARGE}
        />
      </div>
      )}
      <div className="nav-item-label">{label}</div>
      <div className="nav-item-summary" />
      {expandable && <div className={clsx('nav-item-icon', { expanded: isExpanded })} />}
    </div>
  );
}

NavItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  expandable: PropTypes.bool,
  icon: PropTypes.string,
  isExpanded: PropTypes.bool,
  theme: PropTypes.oneOf([Object.values(NavItemTheme)]),
};

NavItem.defaultProps = {
  id: '',
  label: '',
  onClick: () => {},
  expandable: false,
  icon: '',
  isExpanded: false,
  theme: NavItemTheme.PRIMARY_LIGHT,
};

export {
  NavItem,
  NavItemTheme,
};
