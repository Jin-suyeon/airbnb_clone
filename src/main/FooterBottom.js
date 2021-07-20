import { faBlogger, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faPenSquare, faWonSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './FooterBottom.css'

function FooterBottom() {
  return (
    <div className="FooterBottom">

      <div className="FooterBottom_left">
        <div>ⓒ 2021 Airbnb,Inc.</div>
        <span>·</span>
        <div className="FooterBottom_left_2">
          <a href="https://www.airbnb.co.kr/help/article/2855/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4-%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8">개인청보 처리방침</a>
          <span>·</span>
          <a href="https://www.airbnb.co.kr/help/article/2855/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4-%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8">이용약관</a>
          <span>·</span>
          <a href="https://www.airbnb.co.kr/help/article/2855/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4-%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8">사이트맵</a>
          <span>·</span>
          <a href="https://www.airbnb.co.kr/help/article/2855/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4-%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8">한국의 변경된 환불 정책</a>
          <span>·</span>
          <a href="https://www.airbnb.co.kr/help/article/2855/%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4-%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8">회사 세부 정보</a>
        </div>
      </div>

      <div className="FooterBottom_right">
        <div className="FooterBottom_right_text">
          <span className="FooterBottom_right_text_icon">
            <FontAwesomeIcon className="FooterBottom_globe" icon={faGlobe} />
            <span>한국어 (KR)</span>
          </span>


          <span className="FooterBottom_right_text_icon">
            <FontAwesomeIcon icon={faWonSign} />
            <span>KRW</span>
          </span>
        </div>

        <div className="FooterBottom_right_icon">
          <ul>
            <li><FontAwesomeIcon icon={faFacebookF} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faBlogger} /></li>
            <li><FontAwesomeIcon icon={faPenSquare} /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom