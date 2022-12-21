import moment from 'moment';
import Datetime from 'react-datetime';
import { useState } from 'react';
import { Container } from '../Container.styled';
import { Box } from 'components/Boxstatus';
import 'react-datetime/css/react-datetime.css';
import iconCalendar from '../../images/icon/calendar.svg';
import { DiaryDate } from './DiaryDateCalendar.styled';

export const DiaryDateCalendar = () => {
  const [date, setDate] = useState(() =>
    moment(new Date()).format('DD.MM.YYYY')
  );

  const handleChangeDate = value => {
    setDate(moment(value).format('DD.MM.YYYY'));
  };

  const renderInput = (props, openCalendar) => (
    <Box
      display="flex"
      alignItems="center"
      gridGap="20px"
      onClick={openCalendar}
    >
      <DiaryDate>{date}</DiaryDate>
      <img src={iconCalendar} width={20} height={20} alt="calendar" />
    </Box>
  );

  return (
    <Container>
      <Datetime
        renderInput={renderInput}
        value={date}
        dateFormat="DD.MM.YYYY"
        closeOnSelect={true}
        timeFormat={false}
        strictParsing={true}
        onChange={handleChangeDate}
      />
    </Container>
  );
};
