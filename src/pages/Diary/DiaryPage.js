import { Helmet } from 'react-helmet-async';
import { SideBar } from 'components/SideBar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
import { BlockContainer, Wrapper } from './DiaryPage.styled';
import Container from 'components/Container';

export default function DiaryPage() {
  return (
    <Wrapper>
      <Container>
        <Helmet>
          <title>Diary</title>
        </Helmet>
        <BlockContainer>
          <DiaryDateCalendar />
          <DiaryAddProductForm />
        </BlockContainer>
      </Container>
      <SideBar />
    </Wrapper>
  );
}
