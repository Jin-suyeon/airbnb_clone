import React from 'react';
import "./MainBanner.css"

function MainBanner(){
  return(
    <div className="MainBanner">
      <div className="MainBanner_text">
        <div className="MainBanner_headerText">
          슬기로운
        </div>
        <div className="MainBanner_headerText">
          자연생활
        </div>
        <div className="MainBanner_subText">
          에어비앤비가 엄선한 위시리스트를 만나보세요.
        </div>
        <button>
          여행 아이디어 얻기
        </button>
      </div>
    </div>
  );
}

export default MainBanner

