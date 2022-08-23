import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import Icon from '../../icon';
import { IconSizes, IconColors, IconTypes } from '../../icon/icons-constants';

import './index.scss';

const NavItemTheme = {
  GRAY_LIGHT: 'gray-light',
  GRAY_DARK: 'gray-dark',
  PRIMARY_DARK: 'primary-dark',
  PRIMARY_LIGHT: 'primary-light',
};

function NavItem({
  id, label, onClick, nodes, icon, isSelected, theme, isExpanded, onToggleExpand,
}) {
  const expandable = Boolean(nodes.length);

  const onItemClick = () => {
    if (expandable) {
      onToggleExpand((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    } else {
      onClick(id);
    }
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      onItemClick();
    }
  };

  const classNames = clsx('nav-item', {
    [NavItemTheme.PRIMARY_LIGHT]: theme === NavItemTheme.PRIMARY_LIGHT,
    [NavItemTheme.PRIMARY_DARK]: theme === NavItemTheme.PRIMARY_DARK,
    [NavItemTheme.GRAY_DARK]: theme === NavItemTheme.GRAY_DARK,
    [NavItemTheme.GRAY_LIGHT]: theme === NavItemTheme.GRAY_LIGHT,
    selected: isSelected,
  });

  return (
    <div
      className={classNames}
      role="button"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onClick={onItemClick}
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
      {expandable
            && (
            <div className={clsx('nav-item-icon')}>
              <Icon
                color={IconColors.GREY}
                type={isExpanded ? IconTypes.CHEVRON_DOWN : IconTypes.CHEVRON_RIGHT}
                size={IconSizes.LARGE}
              />
            </div>
            )}
    </div>
  );
}

NavItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onToggleExpand: PropTypes.func,
  nodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
  })),
  icon: PropTypes.string,
  isSelected: PropTypes.bool,
  theme: PropTypes.oneOf(Object.values(NavItemTheme)),
  isExpanded: PropTypes.bool,
};

NavItem.defaultProps = {
  id: '',
  label: '',
  onClick: () => {},
  onToggleExpand: () => {},
  nodes: [],
  icon: '',
  isSelected: false,
  theme: NavItemTheme.PRIMARY_LIGHT,
  isExpanded: false,
};

export {
  NavItem,
  NavItemTheme,
};
