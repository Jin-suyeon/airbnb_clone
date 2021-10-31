import React from "react";
import "./TravelHosting.css";

function TravelHosting() {
  return (
    <div className="hosting">
      <div className="hosting_group">
        <img
          className="hosting_img1"
          src="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=2560"
          alt="hosting_img"
        />
        <img
          className="hosting_img2"
          src="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=1440"
          alt="hosting_img"
        />
        <img className="hosting_img3" src="img/Hosting.jpg" alt="hosting_img" />

        <div className="hosting_text">
          <div className="hosting_headtext">호스팅 시작하기</div>
          <div className="hosting_subtext">
            숙소를 공유하여 부수입을 올리고 새로운 가능성을
          </div>
          <div className="hosting_subtext">만나세요.</div>
          <button className="hosting_button">자세히 알아보기</button>
        </div>
      </div>
    </div>
  );
}

export default TravelHosting;
