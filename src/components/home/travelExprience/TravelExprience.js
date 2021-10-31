import React from "react";
import "./TravelExperience.css";
import { LargeUrlImage } from "./LargeUrlImage";

function TravelExperience() {
  return (
    <div className="experience_container">
      <div className="experience_container_sub">
        <div className="experience_header">특별한 즐길 거리를 찾아보세요</div>
        <div className="experience_list">
          {LargeUrlImage.map((el) => {
            return (
              <div className="experience_list_sub">
                <img className="experience_list_img" src={el.img} alt="" />
                <div className="experience_list_textContainer">
                  <span className="experience_list_maintext">
                    {el.maintext}
                  </span>
                  <span className="experience_list_text">{el.text}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TravelExperience;
