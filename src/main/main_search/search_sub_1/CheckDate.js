import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./CheckDate.css";
import Flexible from "./Flexible";
import Calendar from "./Calendar";

function CheckDate({
  changeSearch,
  findValue,
  findValueMonth,
  flexibleTopBottom,
  dayWeekButton,
  choiceMonth,
}) {
  return (
    <BrowserRouter>
      <div className="checkdate_container">
        <div className="checkdate">
          <div className="checkdate_header_container">
            <div className="checkdate_header">
              <Link
                to="/checkdate"
                onClick={changeSearch}
                className={
                  flexibleTopBottom === false
                    ? "checkdate_button_T"
                    : "checkdate_button_F"
                }
              >
                달력
              </Link>
              <Link
                to="/flexible"
                onClick={changeSearch}
                className={
                  flexibleTopBottom === true
                    ? "checkdate_button_T"
                    : "checkdate_button_F"
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
              <Flexible
                dayWeekButton={dayWeekButton}
                findValue={findValue}
                findValueMonth={findValueMonth}
                choiceMonth={choiceMonth}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default CheckDate;
