import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Box } from 'components/Box';
import 'react-datetime/css/react-datetime.css';
import iconCalendar from '../../images/icon/calendar.svg';
import { DiaryDate } from './DiaryDateCalendar.styled';
import TextField from '@mui/material/TextField';

export const DiaryDateCalendar = () => {

   const [value, setValue] = React.useState(dayjs(new Date()));

   const handleChange = (newValue) => {
    setValue(newValue);
  };

  // const renderInput = (props, openCalendar) => (
  //   <Box
  //     display="flex"
  //     alignItems="baseline"
  //     gridGap="20px"
  //     onClick={openCalendar}
  //   >
  //     <DiaryDate>{value}</DiaryDate>
  //     <img src={iconCalendar} width={20} height={20} alt="calendar" />
  //   </Box>
  // );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DiaryDate>
        <DesktopDatePicker
          inputFormat="DD.MM.YYYY"
          closeOnSelect={true}
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </DiaryDate>
    </LocalizationProvider>
  );
};