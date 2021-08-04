import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import SearchLocation from "./search_sub_1/SearchLocation";
import CheckDate from "./search_sub_1/CheckDate";

function Search() {
  //! useState
  // 1. 유연한 일정 클릭 시, search (상단버튼, 하단 내용변경)
  const [flexibleTopBottom, setFlexibleTopBottom] = useState(false);

  // 2. 유연한 일정 버튼 하단 텍스트 변경(주말, 한달, 일주일)
  const [monthValue, setMonthValue] = useState("주말");

  // 3. 유연한 일정 bottom 부분 (주말, 일주일, 한달) 클래스 변경
  const [dayWeekButton, setDayWeekButton] = useState([true, false, false]);

  // 4. 유연한 일정 버튼 하단 텍스트 변경(월제거 및 추가)
  const [dayWeekMonthValue, setDayWeekMonthValue] = useState(["8월", "9월"]);

  // 5. 유연한 일정 bottom 부분 (8월, 9월 ...) 클래스 변경
  const [choiceMonth, setChoiceMonth] = useState([
    true,
    true,
    false,
    false,
    false,
    false,
  ]);

  //! usestate 이용한 함수
  // 1. 유연한 일정 클릭 시, search (상단버튼, 하단 내용변경)
  const changeSearch = () => {
    setFlexibleTopBottom(!flexibleTopBottom);
  };

  // 2. 유연한 일정 버튼 하단 텍스트 변경(주말, 한달, 일주일)
  // 3. 유연한 일정 bottom 부분 (주말, 일주일, 한달) 클래스 변경
  const findValue = (el, idx) => {
    if (el === "주말") setMonthValue("주말");
    if (el === "일주일") setMonthValue("일주일");
    if (el === "한달") setMonthValue("한달");

    const newArr = new Array(3).fill(false);
    newArr[idx] = true;
    setDayWeekButton(newArr);
  };

  // 4. 유연한 일정 버튼 하단 텍스트 변경(월제거 및 추가)
  // 5. 유연한 일정 bottom 부분 (8월, 9월 ...) 클래스 변경
  const findValueMonth = (month, monthidx) => {
    let same = dayWeekMonthValue.filter((ele) => ele === month);
    let different = dayWeekMonthValue.filter((ele) => ele !== month);

    // 들어온 인자와 같은 부분이 없을 때 추가
    if (same.length === 0) {
      setDayWeekMonthValue([...dayWeekMonthValue, month]);
      // 클래스 변경
      setChoiceMonth(
        choiceMonth.map((el, idx) => {
          return idx === monthidx ? !el : el;
        })
      );
      // 들어온 인자가 안에 있는 정보와 같고, 안에있는 정보의 갯수가 1이 아니라면 삭제
    } else if (same.length > 0 && dayWeekMonthValue.length !== 1) {
      setDayWeekMonthValue(different);
      // 클래스 변경
      setChoiceMonth(
        choiceMonth.map((el, idx) => {
          return idx === monthidx ? !el : el;
        })
      );
    }
  };

  //! 일반 함수
  // search bar 선택시 그림자 생성
  const clickButtonShadow = (e) => {
    const btn1 = document.getElementById("search_location");
    btn1.classList.toggle("active", false);
    e.target.classList.toggle("active");
  };

  return (
    <BrowserRouter>
      <div className="search">
        <div className="search_in">
          <Link
            onClick={clickButtonShadow}
            to="/location"
            className="search_location"
          >
            <label>
              <div className="search_boldtext">위치</div>
              <input
                className="search_inputtext"
                type="text"
                placeholder="어디로 여행가세요?"
              ></input>
            </label>
          </Link>

          <span className="search_bar"></span>

          {flexibleTopBottom === false ? (
            <Link
              onClick={clickButtonShadow}
              to="/checkdate"
              className="search_location"
            >
              <label>
                <div className="search_boldtext">체크인</div>
                <div className="search_inputtext">날짜 입력</div>
              </label>
            </Link>
          ) : (
            <Link
              onClick={clickButtonShadow}
              to="/checkdate"
              className="search_location_flexible"
            >
              <label>
                <div className="search_boldtext">유연한 일정</div>
                <div className="search_inputtext_bold">
                  {dayWeekMonthValue}의 {monthValue}
                </div>
              </label>
            </Link>
          )}

          {flexibleTopBottom === false ? (
            <span className="search_bar"></span>
          ) : null}

          {flexibleTopBottom === false ? (
            <Link
              onClick={clickButtonShadow}
              to="/checkdate"
              className="search_location"
            >
              <label>
                <div className="search_boldtext">체크아웃</div>
                <div className="search_inputtext">날짜 입력</div>
              </label>
            </Link>
          ) : null}

          <span className="search_bar"></span>

          <Link
            onClick={clickButtonShadow}
            to="/personnel"
            className="search_location"
          >
            <label className="search_button">
              <div className="search_boldtext">인원</div>
              <div className="search_inputtext">게스트 추가</div>
            </label>

            <span className="search_findbutton">
              <FontAwesomeIcon className="search_findicon" icon={faSearch} />
            </span>
          </Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/location">
          <SearchLocation />
        </Route>

        <Route exact path="/checkdate">
          <CheckDate
            dayWeekButton={dayWeekButton}
            changeSearch={changeSearch}
            findValue={findValue}
            findValueMonth={findValueMonth}
            flexibleTopBottom={flexibleTopBottom}
            choiceMonth={choiceMonth}
          />
        </Route>

        <Route exact path="/personnel">
          <SearchLocation />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Search;
