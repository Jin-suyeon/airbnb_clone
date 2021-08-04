import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Calendar.css";
import { useState } from "react";

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

export default Calendar;
