import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css'
import { BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import SearchLocation from './search_sub_1/SearchLocation';
import CheckDate from './search_sub_1/CheckDate';

function Search() {

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

        <Link to="/checkdate" className="search_location">
          <label>
            <div className="search_boldtext">체크인</div>
            <div className="search_inputtext">날짜 입력</div>
          </label>
        </Link>

        <span className="search_bar"></span>

        <Link to="/checkdate" className="search_location">
          <label>
            <div className="search_boldtext">체크아웃</div>
            <div className="search_inputtext">날짜 입력</div>
          </label>
        </Link>

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
        <CheckDate />
      </Route>

      <Route exact path="/personnel">
        <SearchLocation />
      </Route>
    </Switch>

    </BrowserRouter>
  );
};

export default Search;