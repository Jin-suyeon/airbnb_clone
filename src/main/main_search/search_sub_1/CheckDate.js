import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import './CheckDate.css';

function CheckDate(){

    const [button, setButton] = useState(true);

    const trueOrFalse = () => {
        setButton(!button)
    }

  return (
    <div className="checkdate_container">
        <div className="checkdate">
            <div className="checkdate_header_container">
                <div className="checkdate_header">
                    <span 
                        onClick={trueOrFalse} 
                        className={button === true ? "checkdate_button_T" : "checkdate_button_F"}>
                        달력
                    </span>
                    <span 
                        onClick={trueOrFalse} 
                        className={button === false ? "checkdate_button_T" : "checkdate_button_F"}>
                        유연한 일정
                    </span>
                </div>
            </div>
            
            <Calendar/>

        </div>
    </div>
  );
};

function Calendar() {

    const dayOfTheWeek = ['일', '월', '화', '수', '목', '금', '토']

    const july = [
     [4, 5, 6, 7, 8, 9, 10],
     [11, 12, 13, 14, 15, 16, 17],
     [18, 19, 20, 21, 22, 23, 24],
     [25, 26, 27, 28, 29, 30, 31]
    ]

    const august = [
        [1, 2, 3, 4, 5, 6, 7],
        [8, 9, 10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19, 20, 21],
        [22, 23, 24, 25, 26, 27, 28]
       ]

    return (
        <div className="checkdate_calendar_container">
        <div className="checkdate_calendar">
            <div className="checkdate_calendar_header">
                <span>
                    <FontAwesomeIcon icon={faChevronLeft} className="checkdate_calendar_arrow"/>
                </span>
                <h2>2021년 7월</h2>
            </div>
            <ul>
                {dayOfTheWeek.map(day => <li>{day}</li>)}
            </ul>
            <table>
                <tbody>
                    <tr>
                        <none className="none"></none>
                        <none className="none"></none>
                        <none className="none"></none>
                        <none className="none"></none>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    {july.map(week => {
                        return (<tr>{week.map(day => {return <td>{day}</td>})}</tr>)
                    })}
                </tbody>
            </table>
        </div>

        <div className="checkdate_calendar">
            <div className="checkdate_calendar_header">
                <h2>2021년 8월</h2>
                <span>
                    <FontAwesomeIcon icon={faChevronRight} className="checkdate_calendar_arrow"/>
                </span>
            </div>
            <ul>
                {dayOfTheWeek.map(day => <li>{day}</li>)}
            </ul>
            <table>
                <tbody>
                    {august.map(week => {
                        return (<tr>{week.map(day => {return <td>{day}</td>})}</tr>)
                    })}
                     <tr>
                        <td>29</td>
                        <td>30</td>
                        <td>31</td>
                        <none className="none"></none>
                        <none className="none"></none>
                        <none className="none"></none>
                        <none className="none"></none>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    )
}

// function Flexible() {

// }

export default CheckDate;