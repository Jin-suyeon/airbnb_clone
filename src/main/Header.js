import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { faBars, faGlobe, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <div className="header">

      <div className="header_logo_group">
        <FontAwesomeIcon className="header_logo" icon={faAirbnb} />
        <span className="header_logoname">airbnb</span>
      </div>

      <div className="header_button_group">
        <span className="header_button">숙소</span>
        <span className="header_button">체험</span>
        <span className="header_button">온라인 체험</span>
      </div>

      <div className="header_user_group">
        <span className="header_host">호스트 되기</span>
        <FontAwesomeIcon className="header_globe" icon={faGlobe} />
        <span className="header_user">
          <FontAwesomeIcon className="header_burger" icon={faBars} />
          <FontAwesomeIcon className="header_usercircle" icon={faUserCircle} />
        </span>
      </div>
      
    </div>
  );
};

export default Header;