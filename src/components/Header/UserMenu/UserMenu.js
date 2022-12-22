// import { useSelector } from 'react-redux';
// import { authSelectors } from 'redux/auth/authSelectors';
import {
  List,
  ListItem,
  Arrow,
  LinkToCalc,
  UserInfoWrapper,
  UserName,
  UserExitButton,
} from './UserMenu.styled';

const UserMenu = () => {
  // const name = useSelector(authSelectors.getUserName);

  const onLogout = () => {};

  return (
    <>
      <List>
        <ListItem to="/diary">Diary</ListItem>
        <ListItem to="/calculator">Calculator</ListItem>
      </List>
      <LinkToCalc to="/calculator">
        <Arrow color="black" size="20px" />
      </LinkToCalc>
      <UserInfoWrapper>
        <UserName>Nick</UserName>
        <UserExitButton type="button" onClick={onLogout}>
          Exit
        </UserExitButton>
      </UserInfoWrapper>
    </>
  );
};

export default UserMenu;
