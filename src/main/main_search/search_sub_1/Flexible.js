import React from 'react';
import './Flexible.css'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

function Flexible({ findValue, findValueMonth }) {
    const month = ["8월", "9월", "10월", "11월", "12월", "1월"];
    const dayWeekMonth = ["주말", "일주일", "한달"];
  
    const [dayWeekButton, setDayWeekButton] = useState({
      click: new Array(dayWeekMonth.length).fill(false),
    });

    const [choiceMonth, setChoiceMonth] = useState({
      click: new Array(month.length).fill(false),
    });
  
    const dayWeekMonthButtonClick = (idx) => {
      const newArr = new Array(dayWeekMonth.length).fill(false);
      newArr[idx] = true;
      setDayWeekButton({
        click: newArr,
      });
    };

    const choiceMonthButtonClick = (idx) => {
      setChoiceMonth({
        click: choiceMonth.click.map((el,index) => {
          return idx===index ? !el : el
        })
      })
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
                    dayWeekMonthButtonClick(idx)
                  }, (e) => findValue(e)}
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
              {month.map((month, idx) => {
                return (
                  <div 
                    onClick={() => {
                      choiceMonthButtonClick(idx)
                    }, (e) => findValueMonth(e)}
                    className={
                      choiceMonth.click[idx]
                        ? "flexible_month_button_bold"
                        : "flexible_month_button"
                    }
                  >
                    <FontAwesomeIcon
                      className={
                        choiceMonth.click[idx]
                          ? "flexible_month_button_icon_bold"
                          : "flexible_month_button_icon"
                      }
                      icon={
                        choiceMonth.click[idx]
                          ? faCalendarCheck
                          : faCalendar
                      }
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