import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Personal.css";

function Personal() {
  return (
    <div className="personal_container">
      <div className="personal">
        <div className="personal_text">
          <div className="personal_sub">
            <span className="personal_sub_bold">성인</span>
            <span className="personal_sub_text">만 13세 이상</span>
          </div>
          <div className="personal_sub_2">
            <span className="personal_sub_2_operator">
              <FontAwesomeIcon className="personal_sub_2_icon" icon={faMinus} />
            </span>
            <span className="personal_sub_2_num">0</span>
            <span className="personal_sub_2_operator">
              <FontAwesomeIcon className="personal_sub_2_icon" icon={faPlus} />
            </span>
          </div>
        </div>

        <div className="personal_text">
          <div className="personal_sub">
            <span className="personal_sub_bold">어린이</span>
            <span className="personal_sub_text">만 2~12세</span>
          </div>
          <div className="personal_sub_2">
            <span className="personal_sub_2_operator">
              <FontAwesomeIcon className="personal_sub_2_icon" icon={faMinus} />
            </span>
            <span className="personal_sub_2_num">0</span>
            <span className="personal_sub_2_operator">
              <FontAwesomeIcon className="personal_sub_2_icon" icon={faPlus} />
            </span>
          </div>
        </div>

        <div className="personal_text">
          <div className="personal_sub">
            <span className="personal_sub_bold">유아</span>
            <span className="personal_sub_text">만 2세 미만</span>
          </div>
          <div className="personal_sub_2">
            <span className="personal_sub_2_operator">
              <FontAwesomeIcon className="personal_sub_2_icon" icon={faMinus} />
            </span>
            <span className="personal_sub_2_num">0</span>
            <span className="personal_sub_2_operator">
              <FontAwesomeIcon className="personal_sub_2_icon" icon={faPlus} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
