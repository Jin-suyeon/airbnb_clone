import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css'

function Search(){
  return (
    <div className="search">
        <div className="search_in">
            <span className="search_location">
                <label className="search_button">
                    <div className="search_boldtext">위치</div>
                    <input className="search_inputtext" type="text" placeholder="어디로 여행가세요?"></input>
                </label>
            </span>

            <span className="search_bar">|</span>

            <span className="search_location">
                <label className="search_button">
                    <div className="search_boldtext">체크인</div>
                    <div className="search_inputtext">날짜 입력</div>
                </label>
            </span>

            <span className="search_bar">|</span>

            <span className="search_location">
                <label className="search_button">
                    <div className="search_boldtext">체크아웃</div>
                    <div className="search_inputtext">날짜 입력</div>
                </label>
            </span>

            <span className="search_bar">|</span>

            <span className="search_location">
                <label className="search_button">
                    <div className="search_boldtext">인원</div>
                    <div className="search_inputtext">게스트 추가</div>
                </label>
            </span>
        
            <span className="search_findbutton">
                <FontAwesomeIcon className="search_findicon" icon={faSearch} />
                <span className="search_text">검색</span>
            </span>
        </div>
    </div>
  );
};

export default Search;