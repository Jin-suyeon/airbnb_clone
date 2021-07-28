import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./CheckDate.css";

function CheckDate() {
  const [button, setButton] = useState(true);

  const trueOrFalse = () => {
    setButton(!button);
  };

  return (
    <BrowserRouter>
      <div className="checkdate_container">
        <div className="checkdate">
          <div className="checkdate_header_container">
            <div className="checkdate_header">
              <Link
                to="/checkdate"
                onClick={trueOrFalse}
                className={
                  button === true ? "checkdate_button_T" : "checkdate_button_F"
                }
              >
                달력
              </Link>
              <Link
                to="/flexible"
                onClick={trueOrFalse}
                className={
                  button === false ? "checkdate_button_T" : "checkdate_button_F"
                }
              >
                유연한 일정
              </Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/checkdate">
              <Calendar />
            </Route>
            <Route exact path="/flexible">
              <Flexible />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

function Calendar() {
  const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const july = [
    ["", "", "", "", 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];

  const august = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, "", "", "", ""],
  ];
  const [daybutton, setDaybutton] = useState({
    click: new Array(july.length)
      .fill(0)
      .map((el) => new Array(july[0].length).fill(false)),
  });

  const [daybutton2, setDaybutton2] = useState({
    click: new Array(august.length)
      .fill(0)
      .map((el) => new Array(july[0].length).fill(false)),
  });

  const daybuttonClick = (weekIdx, dayIdx) => {
    setDaybutton({
      click: daybutton.click.map((el1, idx1) => {
        return el1.map((el2, idx2) => {
          return idx2 === dayIdx && idx1 === weekIdx ? !el2 : el2;
        });
      }),
    });
  };

  const daybuttonClick2 = (weekIdx, dayIdx) => {
    setDaybutton2({
      click: daybutton2.click.map((el1, idx1) => {
        return el1.map((el2, idx2) => {
          return idx2 === dayIdx && idx1 === weekIdx ? !el2 : el2;
        });
      }),
    });
  };

  return (
    <div className="calender_calendar_container">
      <div className="calender_calendar">
        <div className="calender_calendar_header">
          <span>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="calender_calendar_arrow"
            />
          </span>
          <h2>2021년 7월</h2>
        </div>
        <ul>
          {dayOfTheWeek.map((day) => (
            <li>{day}</li>
          ))}
        </ul>
        <table>
          <tbody>
            {july.map((week, weekIdx) => {
              return (
                <tr>
                  {week.map((day, dayIdx) => {
                    return (
                      <td
                        onClick={() => daybuttonClick(weekIdx, dayIdx)}
                        className={
                          daybutton.click[weekIdx][dayIdx]
                            ? "daybutton_black"
                            : "daybutton"
                        }
                      >
                        {day}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="calender_calendar">
        <div className="calender_calendar_header">
          <h2>2021년 8월</h2>
          <span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="calender_calendar_arrow"
            />
          </span>
        </div>
        <ul>
          {dayOfTheWeek.map((day) => (
            <li>{day}</li>
          ))}
        </ul>
        <table>
          <tbody>
            {august.map((week, weekIdx) => {
              return (
                <tr>
                  {week.map((day, dayIdx) => {
                    return (
                      <td
                        onClick={() => daybuttonClick2(weekIdx, dayIdx)}
                        className={
                          daybutton2.click[weekIdx][dayIdx]
                            ? "daybutton_black"
                            : "daybutton"
                        }
                      >
                        {day}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Flexible() {
  const month = ["8월", "9월", "10월", "11월", "12월", "1월"];
  const dayWeekMonth = ["주말", "일주일", "한달"];

  const [dayWeekButton, setDayWeekButton] = useState({
    click: new Array(dayWeekMonth.length).fill(false),
  });

  const dayWeekMonthButtonClick = (idx) => {
    const newArr = new Array(dayWeekMonth.length).fill(false);
    newArr[idx] = true;
    setDayWeekButton({
      click: newArr,
    });
  };

  return (
    <div className="flexible_container">
      <div className="flexible">
        <div className="flexible_text">
          <span>숙박 기간을 선택하세요.</span>
        </div>
        <div className="flexible_top_button">
          {dayWeekMonth.map((el, idx) => {
            return (
              <button
                onClick={() => {
                  dayWeekMonthButtonClick(idx);
                }}
                className={
                  dayWeekButton.click[idx]
                    ? "flexible_button_bold"
                    : "flexible_button"
                }
              >
                <span>{el}</span>
              </button>
            );
          })}
        </div>
        <div className="flexible_text">
          <span>여행 날짜를 선택하세요.</span>
        </div>
        <div className="flexible_month_container">
          <div className="flexible_month">
            {month.map((month) => {
              return (
                <div className="flexible_month_button">
                  <FontAwesomeIcon
                    className="flexible_month_button_icon"
                    icon={faCalendar}
                  />
                  <span>{month}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckDate;
