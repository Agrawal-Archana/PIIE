import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import useTranslation from '../../utils/helpers/translation-utils';

import './index.scss';

const ButtonVariants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SECONDARY_GRAY: 'secondary-gray',
  TERTIARY: 'tertiary',
  TERTIARY_GRAY: 'tertiary-gray',
  LINK: 'link',
  LINK_GRAY: 'link-gray',
};

const ButtonSizes = {
  SMALL: 'size-s',
  MEDIUM: 'size-m',
  LARGE: 'size-l',
  X_LARGE: 'size-xl',
  XX_LARGE: 'size-xxl',
};

function Button({
  id, label, onClick, className, disabled, variant, size,
}) {
  const [getTranslations] = useTranslation();

  return (
    <button
      id={id}
      className={clsx('button', size, variant, className)}
      onClick={onClick}
      disabled={disabled}
      type="submit"
    >
      {getTranslations(label)}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  label: 'Primary Button',
  onClick: () => {},
  className: '',
  disabled: false,
  variant: ButtonVariants.PRIMARY,
  size: ButtonSizes.SMALL,
};

export {
  Button,
  ButtonVariants,
  ButtonSizes,
};
