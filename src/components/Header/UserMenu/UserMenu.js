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

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const onLogout = () => {
    dispatch(logout())
  };

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
        <UserName>{ name }</UserName>
        <UserExitButton type="button" onClick={onLogout}>
          Exit
        </UserExitButton>
      </UserInfoWrapper>
    </>
  );
};

export default UserMenu;
