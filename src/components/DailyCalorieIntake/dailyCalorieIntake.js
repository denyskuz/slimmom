import { ButtonPrimary } from "components/Button/Button";
import { IntakeBar, IntakeResult, IntakeTitle, IntakeWrapper, List, ListItem, ListTitle, ListWrapper, TitleWrapper, CloseButton } from "./dailyCalorieIntake.styled";

const DailyCalorieIntake = () => {

    return (
      <>
            <IntakeWrapper>
                <IntakeBar>
                    <CloseButton></CloseButton>
                </IntakeBar>
          <TitleWrapper>
            <IntakeTitle>Your recommended daily calorie intake is</IntakeTitle>
            <IntakeResult>2800 kcal</IntakeResult>
          </TitleWrapper>
          <ListWrapper>
            <ListTitle>Foods you should not eat</ListTitle>
            <List>
              <ListItem>food1</ListItem>
              <ListItem>food2</ListItem>
              <ListItem>food3</ListItem>
            </List>
          </ListWrapper>
          <ButtonPrimary type="button">Start losing weight</ButtonPrimary>
        </IntakeWrapper>
      </>
    );
}

export default DailyCalorieIntake;