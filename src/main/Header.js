import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { faBars, faGlobe, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import Search from './main_search/Search';
import Search2 from './main_search/Search2';
import OnlineExperience from './main_search/OnlineExperience';

function Header() {
  const [button, setButton] = useState(0)

  const [scrollPosition, setScrollPosition] = useState(0)

  const handleClickButton = (e) => {
    console.log(e.target.innerText)
    if (e.target.innerText === "숙소") {
      setButton(0)
    }
    if (e.target.innerText === "체험") {
      setButton(1)
    }
  }

  //console.log(scrollPosition)
  //! header 변경 함수
  //! window.scrollY : 문서가 수직으로 얼마나 스크롤 됐는지 픽셀 단위로 반환한다
  //! document.documentElement.scrollTop : y축 방향으로 스크롤한 거리
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop)
  }
  //console.log(scrollPosition)

  useEffect(() => {
    window.addEventListener("scroll", updateScroll)
  }) 

  return (
    <BrowserRouter>
      <div className={scrollPosition < 60 ? "header" : "header_change"}>

        <div className="header_in">
          <Link to="/" style={{ textDecoration: 'none' }} className="header_logo_group">
            <FontAwesomeIcon className={scrollPosition < 60 ? "header_logo" : "header_logo_red" } icon={faAirbnb} />
            <span className={scrollPosition < 60 ? "header_logoname" : "header_logoname_red" } >airbnb</span>
          </Link>


          {scrollPosition < 60 
           ? <div className="header_button_group" >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="header_button_group_in">
                <span onClick={handleClickButton} className="header_button">숙소</span>
                <span className={button === 0 ? "header_underbar_black" : "header_underbar"}></span>
              </div>
            </Link>
            
            <Link to="/experience" style={{ textDecoration: 'none' }}>
              <div className="header_button_group_in">
                <span onClick={handleClickButton} className="header_button">체험</span>
                <span className={button === 1 ? "header_underbar_black" : "header_underbar"}></span>
              </div>  
            </Link>
            {/* <Link to="/online/experience" style={{ textDecoration: 'none' }}> */}
            <div onClick="location.href='/online/experience';" className="header_button_group_in">
              <span className="header_button">온라인 체험</span>
              <span className="header_underbar"></span>
            </div>
            {/* </Link> */}
          </div>
          : <div className="header_button_group">
             <div className="header_scroll_search">
              <span className="header_scroll_search_text">검색 시작하기</span>
              <span className="header_scroll_search_button">
                <FontAwesomeIcon
                  className="header_scroll_search_icon"
                  icon={faSearch}
                />
              </span>
            </div>
            </div>}

          <div className="header_user_group">
            <span className="header_host">호스트 되기</span>
            <FontAwesomeIcon className="header_globe" icon={faGlobe} />
            <span className="header_user">
              <FontAwesomeIcon className="header_burger" icon={faBars} />
              <FontAwesomeIcon className="header_usercircle" icon={faUserCircle} />
            </span>
          </div>
        </div>
        <Switch>

          <Route exact path="/">
            <div className={scrollPosition < 60 ? "" : "search_none"}>
              <Search />
            </div>
          </Route>

          <Route exact path="/experience">
            <div className={scrollPosition < 60 ? "" : "search_none"}>
              <Search2 />
            </div>
          </Route>

          <Route exact path="/online/experience">
            <OnlineExperience />
          </Route>

        </Switch>
      </div>

      <div className="search_app_padding">
        <div className="search_app">
          <FontAwesomeIcon className="search_appicon" icon={faSearch} />
          <input className="search_appinputtext" type="text" placeholder="어디로 여행가세요?"></input>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Header;