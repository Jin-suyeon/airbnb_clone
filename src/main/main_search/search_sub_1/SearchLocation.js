import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SearchLocation.css'

function SearchLocation(){
  return(
    <div className="searchLocation">
      <div className="searchLocation_in">
        <div className="searchLocation_maintext">
          <span>언제 어디로든 떠나는 여행</span>
        </div>
        <div className="searchLocation_bar">
          <span className="searchLocation_bar_text">유연한 검색</span>
          <FontAwesomeIcon className="searchLocation_icon" icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}

export default SearchLocation