import React from "react";
import "./TravelIdea.css";

function TravelIdea() {
  return (
    <div className="Idea">
      <div className="Idea_group">
        <img
          className="Idea_img1"
          src="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=2560"
          alt="Idea_img"
        />
        <img
          className="Idea_img2"
          src="https://a0.muscache.com/im/pictures/4602a952-afa0-46a6-b08a-24e67e958309.jpg?im_w=1440"
          alt="Idea_img"
        />
        <img className="Idea_img3" src="img/MainBanner.jpeg" alt="Idea_img" />

        <div className="Idea_text">
          <div className="Idea_headtext">슬기로운 자연생활</div>
          <div className="Idea_subtext">에어비앤비가 엄선한 위시리스트</div>
          <button className="Idea_button">여행 아이디어 얻기</button>
        </div>
      </div>
    </div>
  );
}

export default TravelIdea;
