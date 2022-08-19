import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { IconSizes, IconsMap, IconTypes } from './icons-constants';

const Icon = forwardRef((props, ref) => {
  const {
    color, size, strokeWidth, type, onClick,
  } = props;
  const IconComponent = IconsMap[IconTypes[type]];

  return (
    <IconComponent
      ref={ref}
      stroke={color}
      size={size}
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
