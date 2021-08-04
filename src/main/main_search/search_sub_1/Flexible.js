import React from "react";
import "./Flexible.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCalendarCheck,
} from "@fortawesome/free-regular-svg-icons";

function Flexible({ findValue, findValueMonth, dayWeekButton, choiceMonth }) {
  const month = ["8월", "9월", "10월", "11월", "12월", "1월"];
  const dayWeekMonth = ["주말", "일주일", "한달"];

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
                  findValue(el, idx);
                }}
                className={
                  dayWeekButton[idx]
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
            {month.map((month, idx) => {
              return (
                <div
                  onClick={() => {
                    findValueMonth(month, idx);
                  }}
                  className={
                    choiceMonth[idx]
                      ? "flexible_month_button_bold"
                      : "flexible_month_button"
                  }
                >
                  <FontAwesomeIcon
                    className={
                      choiceMonth[idx]
                        ? "flexible_month_button_icon_bold"
                        : "flexible_month_button_icon"
                    }
                    icon={choiceMonth[idx] ? faCalendarCheck : faCalendar}
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

export default Flexible;
