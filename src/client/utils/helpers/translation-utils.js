import { useCallback, useContext } from 'react';
import TranslationContext from '../../contexts/translation-context';

const useTranslation = () => {
  const translations = useContext(TranslationContext);
  const getTranslation = useCallback(
    (key) => (translations ? translations[key] : key),
    [translations],
  );

  return [getTranslation];
};

export default useTranslation;
