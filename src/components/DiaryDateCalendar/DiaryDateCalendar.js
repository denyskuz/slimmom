import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import 'react-datetime/css/react-datetime.css';
import { DiaryDate, Outline } from './DiaryDateCalendar.styled';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useDispatch } from 'react-redux';
import { getAllDiaryProduct } from 'redux/services/operations';

export const DiaryDateCalendar = () => {
  const [value, setValue] = React.useState(new Date().toISOString());
  const dispatch = useDispatch();

  const handleChange = newValue => {
    const date = dayjs(newValue).format();

    setValue(date);
    dispatch(getAllDiaryProduct(date));
  };
  React.useEffect(() => {
    dispatch(getAllDiaryProduct(value));
  }, [dispatch, value]);

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
