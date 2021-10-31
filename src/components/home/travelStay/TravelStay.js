import React from "react";
import "./TravelStay.css";
import { MediumUrlImages } from "./MediumUrlImage";

function TravelStay() {
  return (
    <div className="stay_container">
      <div className="stay_container_sub">
        <div className="stay_header">어디에서나,여행은 살아보는 거야!</div>
        <div className="stay_list">
          {MediumUrlImages.map((el) => {
            return (
              <div className="stay_list_sub">
                <img className="stay_list_img" src={el.img} alt="" />
                <div className="stay_list_textContainer">
                  <span className="stay_list_text">{el.text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TravelStay;
