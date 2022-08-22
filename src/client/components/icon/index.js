import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { IconSizes, IconsMap, IconTypes } from './icons-constants';

import './index.scss';

const Icon = forwardRef((props, ref) => {
  const {
    color, size, strokeWidth, type, onClick,
  } = props;
  const IconComponent = IconsMap[IconTypes[type]];
  const classNames = clsx('icon-container', color);

  return (
    <IconComponent
      ref={ref}
      size={size}
      className={classNames}
      strokeWidth={strokeWidth}
      onClick={onClick}
    />
  );
});

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  strokeWidth: PropTypes.string,
  type: PropTypes.oneOf(Object.values(IconTypes)),
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  color: 'currentColor',
  size: IconSizes.LARGE,
  strokeWidth: '2',
  type: 'IMAGE',
  onClick: () => {},
};

Icon.displayName = 'Icon';

export default Icon;
