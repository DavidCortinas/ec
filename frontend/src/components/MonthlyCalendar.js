import calendar_img from '../images/demo_calendar.jpeg';
import Calendar from 'react-calendar';
import { scrollTo } from 'react-scroll/modules/mixins/animate-scroll';
import '../css/Calendar.css';
import { useState } from 'react';

export const MonthlyCalendar = () => {
        const [date, setDate] = useState(new Date());

        const handleClick = (value) => {
            console.log('Clicked day: ', value)
            if (value.getDay() === 1) {
                const openJams = document.querySelector('#open-jams')
                openJams.scrollIntoView({ behavior: 'smooth', block: 'center'})
            }
            if (value.getDate() === 1) {
                
            }
            if (value.getDate() === 2) {
                
            }
            if (value.getDate() === 3) {
                
            }
            if (value.getDate() === 4) {
                
            }
            if (value.getDate() === 5) {
                
            }
            if (value.getDate() === 6) {
                
            }
            if (value.getDate() === 7) {
                
            }
            if (value.getDate() === 8) {
                
            }
            if (value.getDate() === 9) {
                
            }
            if (value.getDate() === 10) {
                
            }
            if (value.getDate() === 11) {
                
            }
            if (value.getDate() === 12) {
                
            }
            if (value.getDate() === 13) {
                
            }
            if (value.getDate() === 14) {
                
            }
            if (value.getDate() === 15) {
                
            }
            if (value.getDate() === 16) {
                
            }
            if (value.getDate() === 17) {
                
            }
            if (value.getDate() === 18) {
                
            }
            if (value.getDate() === 19) {
                
            }
            if (value.getDate() === 20) {
                
            }
            if (value.getDate() === 21) {
                
            }
            if (value.getDate() === 22) {
                
            }
            if (value.getDate() === 23) {
                
            }
            if (value.getDate() === 24) {
                console.log('TRUE')
                const openJams = document.querySelector('#twenty-four')
                openJams.scrollIntoView({ behavior: 'smooth', block: 'center'})
            }
            if (value.getDate() === 25) {
                
            }
            if (value.getDate() === 26) {
                
            }
            if (value.getDate() === 27) {
                
            }
            if (value.getDate() === 28) {
                
            }
            if (value.getDate() === 29) {
                
            }
            if (value.getDate() === 30) {
                
            }
            if (value.getDate() === 31) {
                
            }
        }

        return (
            <div id='calendar' className='calendar-overlay'>
                <div className='calendar-img'>
                    <img src={calendar_img} style={{ width:'175vmin' }}/>
                </div>
                <div className='calendar-container'>
                    <Calendar 
                        calendarType='US' 
                        showNavigation={false} 
                        showNeighboringMonth={false} 
                        value={date}
                        onChange={setDate}
                        onClickDay={handleClick}
                    />
                </div>
            </div>
        );
    }