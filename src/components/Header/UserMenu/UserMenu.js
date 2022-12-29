import { useSelector } from 'react-redux';
import { getUserName } from 'redux/services/selectors';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/services/operations';
import {
  List,
  ListItem,
  ListItemDark,
  Arrow,
  LinkToCalc,
  UserInfoWrapper,
  UserName,
  UserNameDark,
  UserExitButton,
} from './UserMenu.styled';

import { useTranslation } from 'react-i18next';

const UserMenu = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.darkTheme);
  const name = useSelector(getUserName);

  const onLogout = () => {
    dispatch(logout());
  };
  const { t } = useTranslation();
  return (
    <>
      <List>
        {!theme ? (
          <>
            <ListItem to="/diary">{t('Diary')}</ListItem>
        <ListItem to="/calculator">{t('Calculator_button')}</ListItem>
          </>
        ) : (
            <>
              <ListItemDark to="/diary">{t('Diary')}</ListItemDark>
        <ListItemDark to="/calculator">{t('Calculator_button')}</ListItemDark>
            </>
        )}
        
      </List>
      <LinkToCalc to="/calculator">
        <Arrow color="black" size="20px" />
      </LinkToCalc>
      <UserInfoWrapper>
        {!theme ? (
          <UserName>{name}</UserName>
        ) : (
          <UserNameDark>{name}</UserNameDark>
        )}
        <UserExitButton type="button" onClick={onLogout}>
          {t('Exit')}
        </UserExitButton>
      </UserInfoWrapper>
    </>
  );
};

export default UserMenu;
