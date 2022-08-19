import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button, ButtonVariants, ButtonSizes } from '../../components/button';
import Input from '../../components/input';
import { validate, ValidationTypes } from '../../utils/helpers/input-validations-utils';
import useTranslation from '../../utils/helpers/translation-utils';

import './index.scss';
import URL from '../../utils/constants/URL';

function ResetPassword() {
  const [getTranslations] = useTranslation();
  const navigate = useNavigate();

  const {
    register, handleSubmit, formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmitClick = () => {
    navigate(URL.LOGIN);
  };

  return (
    <form className="reset-password">
      <div className="rp-page">
        <div className="header">{getTranslations('__SET_NEW_PASSWORD')}</div>
        <div className="subheader">{getTranslations('__MUST_BE_NEW_PASSWORD')}</div>
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
            [ValidationTypes.MIN_LENGTH]: { value: 8, message: '8' },
          }}
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
          <Button
            id="back-to-login"
            label="__BACK_TO_LOGIN"
            variant={ButtonVariants.LINK_GRAY}
            size={ButtonSizes.SMALL}
          />
        </div>
      </div>
    </form>
  );
}

export default ResetPassword;
