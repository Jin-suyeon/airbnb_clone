import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css'
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import SearchLocation from './search_sub_1/SearchLocation';
import CheckDate from './search_sub_1/CheckDate';

function Search() {

  //! 유연한 일정 클릭 시, 상단 search 변경
  const [flexible, setFlexible] = useState(false)

  //! 유연한 일정 숙박기간, 여행날짜 클릭 시, search 내용 변경
  const [monthValue, setMonthValue] = useState("주말")

  const [dayWeekMonthValue, setDayWeekMonthValue] = useState(["8월"])

  const changeSearch = () => {
    setFlexible(!flexible)
  };

  const findValue = (e) => {
    if(e.target.innerText === "주말") setMonthValue("주말")
    if(e.target.innerText === "일주일") setMonthValue("일주일")
    if(e.target.innerText === "한달") setMonthValue("한달")
  }

  const findValueMonth = (e) => {
    let filter = dayWeekMonthValue.filter((ele) => {
      return ele !== e.target.innerText
    })
    console.log("filter", filter)

    for(let i = 0; i<dayWeekMonthValue.length; i++) {
      if(dayWeekMonthValue.length >= 1 && dayWeekMonthValue[i] === e.target.innerText) {
        console.log("e.target.innerText", e.target.innerText)
        setDayWeekMonthValue(filter)
        console.log("after", dayWeekMonthValue)
      } else {
        setDayWeekMonthValue(dayWeekMonthValue.push(e.target.innerText))
        console.log("afterpush", dayWeekMonthValue)
      }
    }
 
  }

  return (
    <BrowserRouter>
    <div className="search">

      <div className="search_in">
      
        <Link to="/location" className="search_location">
          <label>
            <div className="search_boldtext">위치</div>
            <input className="search_inputtext" type="text" placeholder="어디로 여행가세요?"></input>
          </label>
        </Link>

        <span className="search_bar"></span>

          {flexible===false 
            ? <Link to="/checkdate" className="search_location">
              <label>
            <div className="search_boldtext">체크인</div>
            <div className="search_inputtext">날짜 입력</div>
          </label>
          </Link>
            : <Link to="/checkdate" className="search_location">
              <label>
            <div className="search_boldtext">유연한 일정</div>
            <div 
              className="search_inputtext_bold"
            >
            {dayWeekMonthValue}의 {monthValue}
            </div>
          </label>
          </Link>
          }

        {flexible===false 
          ? <span className="search_bar"></span>
          : null
        } 

          {flexible===false 
            ?  <Link to="/checkdate" className="search_location">
              <label>
            <div className="search_boldtext">체크아웃</div>
            <div className="search_inputtext">날짜 입력</div>
          </label>
          </Link>
            : null
          }

        <span className="search_bar"></span>
        

        <Link to="/personnel" className="search_location">
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
        <CheckDate changeSearch={changeSearch} findValue={findValue} findValueMonth={findValueMonth}/>
      </Route>

      <Route exact path="/personnel">
        <SearchLocation />
      </Route>
    </Switch>

    </BrowserRouter>
  );
};

export default Search;