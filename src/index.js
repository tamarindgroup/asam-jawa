import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import './index.css';
import App from './App';
import global_id from './translate_id.json';
import global_en from './translate_en.json';
import global_ar from './translate_ar.json';
import global_zh from './translate_zh.json';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { I18nextProvider } from 'react-i18next';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "id",
  resources: {
    id: {
      global: global_id
    },
    en: {
      global: global_en
    },
    ar: {
      global: global_ar
    },
    zh: {
      global: global_zh
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
