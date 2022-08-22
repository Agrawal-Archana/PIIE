import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import useTranslation from '../../utils/helpers/translation-utils';
import { ValidationTypes } from '../../utils/helpers/input-validations-utils';

import './index.scss';

function Checkbox({
  id, label, name, className, disabled, register, rules, checked, onClick,
}) {
  const [getTranslations] = useTranslation();

  return (
    <div className="checkbox-container">
      <input
        id={id}
        type="checkbox"
        disabled={disabled}
        className={clsx('checkbox', className, { checked })}
        onClick={onClick}
        {...register(name, { ...rules })}
      />
      <label htmlFor={id} className="checkbox-label">{getTranslations(label)}</label>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  register: PropTypes.func,
  rules: PropTypes.shape({
    [ValidationTypes.REQUIRED]: PropTypes.bool,
    [ValidationTypes.VALIDATE]: PropTypes.func,
  }),
  checked: PropTypes.bool,
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  label: '',
  name: '',
  className: '',
  disabled: false,
  register: () => {},
  onClick: () => {},
  rules: null,
  checked: false,
};

export default Checkbox;
