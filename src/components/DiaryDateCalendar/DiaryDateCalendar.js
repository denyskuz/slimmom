import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import 'react-datetime/css/react-datetime.css';
import { DiaryDate, Outline } from './DiaryDateCalendar.styled';
import TextField from '@mui/material/TextField';
import DateRangeIcon from '@mui/icons-material/DateRange';

export const DiaryDateCalendar = () => {
  const [value, setValue] = React.useState(dayjs(new Date()));

  const handleChange = newValue => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DiaryDate>
        <DesktopDatePicker
          inputFormat="DD.MM.YYYY"
          closeOnSelect={true}
          value={value}
          components={{ OpenPickerIcon: DateRangeIcon }}
          onChange={handleChange}
          renderInput={params => <Outline {...params} />}
        />
      </DiaryDate>
    </LocalizationProvider>
  );
};
