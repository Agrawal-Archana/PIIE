import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Icon from '../icon';
import { IconColors, IconSizes, IconTypes } from '../icon/icons-constants';
import useTranslation from '../../utils/helpers/translation-utils';
import { ValidationTypes } from '../../utils/helpers/input-validations-utils';

import './index.scss';

function Input({
  id,
  label,
  type,
  name,
  register,
  placeholder,
  defaultValue,
  hintText,
  prefixIcon,
  suffixIcon,
  errorMessage,
  rules,
}) {
  const [getTranslations] = useTranslation();
  const clsName = clsx('ip-wrapper', {
    'prefix-icon': prefixIcon,
    'suffix-icon': suffixIcon,
    error: errorMessage.length,
  });

  return (
    <div className="ip-container">
      <div className="ip-label">{getTranslations(label)}</div>
      <div className={clsName}>
        {prefixIcon && <div className="ip-icon prefix">{prefixIcon}</div>}
        <input
          id={id}
          type={type}
          name={name}
          {...register(name, { ...rules })}
          placeholder={getTranslations(placeholder)}
          defaultValue={defaultValue}
        />
        {errorMessage.length
          ? (
            <div className="ip-icon error-icon">
              <Icon
                type={IconTypes.ALERT_CIRCLE}
                size={IconSizes.MEDIUM}
                color={IconColors.ERROR_500}
              />
            </div>
          )
          : suffixIcon && <div className="ip-icon suffix">{suffixIcon}</div>}
      </div>
      {errorMessage && <div className="ip-error-msg">{errorMessage}</div>}
      {hintText && <div className="ip-hint-text">{getTranslations(hintText)}</div>}
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  hintText: PropTypes.string,
  prefixIcon: PropTypes.element,
  suffixIcon: PropTypes.element,
  errorMessage: PropTypes.string,
  rules: PropTypes.shape({
    [ValidationTypes.REQUIRED]: PropTypes.bool,
    [ValidationTypes.MIN]: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
    [ValidationTypes.MAX]: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
    [ValidationTypes.MIN_LENGTH]: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
    [ValidationTypes.MAX_LENGTH]: PropTypes.shape({
      value: PropTypes.number,
      message: PropTypes.string,
    }),
    [ValidationTypes.PATTERN]: PropTypes.string,
    [ValidationTypes.VALIDATE]: PropTypes.func,
  }),
};

Input.defaultProps = {
  label: '',
  type: '',
  name: '',
  register: () => {},
  placeholder: '',
  defaultValue: '',
  hintText: '',
  prefixIcon: null,
  suffixIcon: null,
  errorMessage: '',
  rules: null,
};

export default Input;
