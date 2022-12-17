import {
    List,
    ListItem,
    // UserInfo,
    // Arrow,
    // Button,
    // UserInfoWrapper,
    // UserName,
} from './UserMenu.styled';

const UserMenu = () => {
    // const name = "Nick";
    return (
        <>
            <List>
                <ListItem to="/dairy">DAIRY</ListItem>
                <ListItem to="/calculator">CALCULATOR</ListItem>
            </List>
            {/* <UserInfo>
            <Button
                type="button"
            >
                <Arrow color="black" size="20px"/>
            </Button>
            <UserInfoWrapper>
                <UserName>{name}</UserName>
                <Button type="button">Exit</Button>
                </UserInfoWrapper>
            </UserInfo> */}
        </>
    );
};

export default UserMenu;