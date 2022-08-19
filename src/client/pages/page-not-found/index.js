import React from 'react';

import useTranslation from '../../utils/helpers/translation-utils';

import './index.scss';

function PageNotFound() {
  const [getTranslations] = useTranslation();

  return (
    <form className="page-not-found-container">
      <div className="page-not-found">
        <div className="header">{getTranslations('__PAGE_NOT_FOUND')}</div>
        <div className="subheader">{getTranslations('__PAGE_DOES_NOT_EXIST')}</div>
      </div>
    </form>
  );
}

export default PageNotFound;
