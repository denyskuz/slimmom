import moment from 'moment';
import Datetime from 'react-datetime';
import { useState } from 'react';
import { Box } from 'components/Box';
import 'react-datetime/css/react-datetime.css';
import iconCalendar from '../../images/icon/calendar.svg';
// import { DiaryDate } from './DiaryDateCalendar.styled';

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
      alignItems="baseline"
      gridGap="20px"
      onClick={openCalendar}
    >
      <div>{date}</div>
      <img src={iconCalendar} width={20} height={20} alt="calendar" />
    </Box>
  );

  return (
    <>
      <Datetime
        renderInput={renderInput}
        value={date}
        dateFormat="DD.MM.YYYY"
        closeOnSelect={true}
        timeFormat={false}
        strictParsing={true}
        onChange={handleChangeDate}
      />
    </>
  );
};
