import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { useState } from 'react';
import { Container } from '../Container.styled';
import { Box } from 'components/Boxstatus';
import iconCalendar from '../../images/icon/calendar.svg';
import moment from 'moment';
import { DiaryDate } from './DiaryDateCalendar.styled';


export const DiaryDateCalendar = () => {

    const [date, setDate] = useState(() =>
        moment(new Date()).format('DD.MM.YYYY')
    );

    const handleChangeDate = value => { setDate(moment(value).format('DD.MM.YYYY')) };

    const input = (props, openCalendar) => {
        return (
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
    };

    return (
        <>
            <Container>
                <Datetime
                    renderInput={input}
                    value={date}
                    dateFormat="DD.MM.YYYY"
                    closeOnSelect={true}
                    timeFormat={false}
                    strictParsing={true}
                    onChange={handleChangeDate}
                />
            </Container>
        </>
    );

};

