import React from "react";
import "./TravelDestination.css";
import { SmallUrlImage } from "./SmallUrlImage";

function TravelDestination() {
  return (
    <div className="container">
      <div className="container_sub">
        <div className="container_header">
          <span className="container_header_sub">가까운 여행지 둘러보기</span>
        </div>
        <div className="container_list">
          {SmallUrlImage.map((el) => {
            return (
              <a className="container_list_url" href={el.url}>
                <img className="container_list_img" src={el.img} alt="" />
                <div className="container_list_text">
                  <span className="container_list_place">{el.place}</span>
                  <span className="container_list_time">{el.time}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TravelDestination;
