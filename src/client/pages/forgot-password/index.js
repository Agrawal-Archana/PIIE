import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, ButtonVariants, ButtonSizes } from '../../components/button';
import Icon from '../../components/icon';
import { IconSizes, IconColors, IconTypes } from '../../components/icon/icons-constants';
import Input from '../../components/input';
import { validate, ValidationTypes } from '../../utils/helpers/input-validations-utils';
import useTranslation from '../../utils/helpers/translation-utils';

import './index.scss';
import URL from '../../utils/constants/URL';

function ForgotPassword() {
  const [getTranslations] = useTranslation();
  const navigate = useNavigate();

  const {
    register, handleSubmit, formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmitClick = () => {
    navigate(URL.RESET_PASSWORD);
  };

  return (
    <form className="forgot-password">
      <div className="fp-page">
        <div className="header">{getTranslations('__FORGOT_PASSWORD_HEADER')}</div>
        <div className="subheader">{getTranslations('__RESET_PASSWORD_INSTRUCTIONS')}</div>
        <Input
          id="email"
          name="email"
          label="__EMAIL"
          placeholder="__ENTER_YOUR_EMAIL"
          type="text"
          defaultValue=""
          register={register}
          prefixIcon={
            <Icon type={IconTypes.MAIL} size={IconSizes.MEDIUM} color={IconColors.GREY} />
                    }
          errorMessage={errors?.email && validate(errors.email, '')}
          rules={{ [ValidationTypes.REQUIRED]: true }}
        />
        <Button
          id="reset-password"
          label="__RESET_PASSWORD"
          variant={ButtonVariants.PRIMARY}
          size={ButtonSizes.LARGE}
          className="full-width"
          onClick={handleSubmit(onSubmitClick)}
        />
        <div className="footer">
          <div className="footer-msg">
            {getTranslations('__BACK_TO_LOGIN')}
          </div>
        </div>
      </div>
    </form>
  );
}

export default ForgotPassword;
