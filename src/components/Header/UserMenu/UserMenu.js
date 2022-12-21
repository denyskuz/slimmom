import {
  List,
  ListItem,
  Arrow,
  Button,
  UserInfoWrapper,
  UserName,
  UserExitButton,
} from './UserMenu.styled';

const UserMenu = () => {
  const name = 'Nick';

  return (
    <>
      <List>
        <ListItem to="/dairy">Dairy</ListItem>
        <ListItem to="/calculator">Calculator</ListItem>
      </List>
      <Button type="button">
        <Arrow color="black" size="20px" />
      </Button>
      <UserInfoWrapper>
        <UserName>{name}</UserName>
        <UserExitButton type="button">Exit</UserExitButton>
      </UserInfoWrapper>
    </>
  );
};

export default UserMenu;
