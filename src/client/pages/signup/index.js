import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button, ButtonVariants, ButtonSizes } from '../../components/button';
import Icon from '../../components/icon';
import { IconSizes, IconColors, IconTypes } from '../../components/icon/icons-constants';
import Input from '../../components/input';
import { validate, ValidationTypes } from '../../utils/helpers/input-validations-utils';
import useTranslation from '../../utils/helpers/translation-utils';

import './index.scss';
import URL from '../../utils/constants/URL';

function SignUp() {
  const [getTranslations] = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register, handleSubmit, formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmitClick = async () => {
    navigate(`/dashboard${location.search}`);
  };

  return (
    <form className="signup-page-container">
      <div className="signup-page">
        <div className="header">{getTranslations('__SIGN_UP')}</div>
        <div className="subheader">{getTranslations('__START_TRIAL')}</div>
        <Input
          id="name"
          label="__NAME"
          name="name"
          placeholder="__ENTER_YOUR_NAME"
          type="text"
          defaultValue=""
          register={register}
          errorMessage={errors?.name && validate(errors.name, '')}
          rules={{ [ValidationTypes.REQUIRED]: true }}
        />
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
        <Input
          id="password"
          label="__PASSWORD"
          name="password"
          placeholder="__CREATE_PASSWORD"
          type="password"
          defaultValue=""
          register={register}
          errorMessage={errors?.password && validate(errors.password, '')}
          rules={{
            [ValidationTypes.REQUIRED]: true,
            [ValidationTypes.MIN_LENGTH]: { value: 8, message: '8' },
          }}
        />
        <Button
          id="get-started"
          label="__GET_STARTED"
          variant={ButtonVariants.PRIMARY}
          size={ButtonSizes.LARGE}
          className="full-width"
          onClick={handleSubmit(onSubmitClick)}
        />
        <div className="footer">
          <div className="footer-msg">
            {getTranslations('__ALREADY_HAVE_AN_ACCOUNT')}
          </div>
          <Button
            id="login"
            label="__LOGIN"
            variant={ButtonVariants.LINK}
            size={ButtonSizes.SMALL}
            onClick={() => navigate(URL.LOGIN)}
          />
        </div>
      </div>
    </form>
  );
}

export default SignUp;
