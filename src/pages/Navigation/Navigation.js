import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Navigation = () => {
  const { t } = useTranslation();
  return <NavLink to="/">{t('Login')}</NavLink>;
};
