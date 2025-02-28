import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageMenu = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('id')}>Indonesian</button>
    </div>
  );
};

export default LanguageMenu;
