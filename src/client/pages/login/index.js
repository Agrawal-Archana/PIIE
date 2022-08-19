import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button, ButtonVariants, ButtonSizes } from '../../components/button';
import Icon from '../../components/icon';
import { IconSizes, IconColors, IconTypes } from '../../components/icon/icons-constants';
import Input from '../../components/input';
import Checkbox from '../../components/checkbox';
import { validate, ValidationTypes } from '../../utils/helpers/input-validations-utils';
import useTranslation from '../../utils/helpers/translation-utils';
import URL from '../../utils/constants/URL';

import './index.scss';

function Login() {
  const [getTranslations] = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmitClick = () => {
    navigate(`/dashboard${location.search}`);
  };

  return (
    <form className="login-page-container" autoComplete="off">
      <div className="login-page">
        <div className="header">{getTranslations('__LOGIN_TO_YOUR_ACCOUNT')}</div>
        <div className="subheader">{getTranslations('__WELCOME_BACK')}</div>
        <Input
          id="email"
          label="__EMAIL"
          name="email"
          placeholder="__ENTER_YOUR_EMAIL"
          type="text"
          defaultValue=""
          register={register}
          prefixIcon={
            <Icon type={IconTypes.MAIL} size={IconSizes.MEDIUM} color={IconColors.GRAY_500} />
          }
          errorMessage={errors?.email && validate(errors.email, '')}
          rules={{ [ValidationTypes.REQUIRED]: true }}
        />
        <Input
          id="password"
          label="__PASSWORD"
          name="password"
          placeholder="__ENTER_YOUR_PASSWORD"
          type="password"
          defaultValue=""
          register={register}
          errorMessage={errors?.password && validate(errors.password, '')}
          rules={{
            [ValidationTypes.REQUIRED]: true,
            [ValidationTypes.MAX_LENGTH]: { value: 8, message: '12' },
            [ValidationTypes.MIN_LENGTH]: { value: 8, message: '8' },
          }}
        />
        <div className="password-actions">
          <Checkbox
            id="rememberPassword"
            label="__REMEMBER_PASSWORD"
            name="rememberPassword"
            className="remember-password"
            register={register}
            checked={watch('rememberPassword')}
          />
          <Button
            id="forget-password"
            label="__FORGOT_PASSWORD"
            variant={ButtonVariants.LINK}
            size={ButtonSizes.SMALL}
            onClick={() => navigate(URL.FORGET_PASSWORD)}
            className="no-padding"
          />
        </div>
        <div className="sign-in">
          <Button
            id="sign-in"
            label="__SIGN_IN"
            variant={ButtonVariants.PRIMARY}
            size={ButtonSizes.LARGE}
            className="full-width"
            onClick={handleSubmit(onSubmitClick)}
          />
        </div>
        <div className="sign-in-with-google">
          <Button
            id="sign-in-with-google"
            label="__SIGN_IN_WITH_GOOGLE"
            variant={ButtonVariants.SECONDARY_GRAY}
            size={ButtonSizes.LARGE}
            className="full-width"
          />
        </div>
        <div className="footer">
          <div className="footer-msg">
            {getTranslations('__DONT_HAVE_AN_ACCOUNT')}
          </div>
          <Button
            id="sign-up"
            label="__SIGN_UP"
            variant={ButtonVariants.LINK}
            size={ButtonSizes.SMALL}
            onClick={() => navigate(URL.SIGN_UP)}
          />
        </div>
      </div>
    </form>
  );
}

export default Login;
