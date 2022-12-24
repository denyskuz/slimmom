import { useSelector } from 'react-redux';
import { getUserName } from 'redux/services/selectors';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/services/operations';
import {
  List,
  ListItem,
  Arrow,
  LinkToCalc,
  UserInfoWrapper,
  UserName,
  UserExitButton,
} from './UserMenu.styled';

import { useTranslation } from 'react-i18next';
// eslint-disable-next-line
import i18n from './../../../translations/i18n';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const onLogout = () => {
    dispatch(logout());
  };
  const { t } = useTranslation();
  return (
    <>
      <List>
        <ListItem to="/diary">{t('Diary')}</ListItem>
        <ListItem to="/calculator">{t('Calculator_button')}</ListItem>
      </List>
      <LinkToCalc to="/calculator">
        <Arrow color="black" size="20px" />
      </LinkToCalc>
      <UserInfoWrapper>
        <UserName>{name}</UserName>
        <UserExitButton type="button" onClick={onLogout}>
          {t('Exit')}
        </UserExitButton>
      </UserInfoWrapper>
    </>
  );
};

export default UserMenu;
