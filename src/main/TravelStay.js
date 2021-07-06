import React from 'react';
import './TravelStay.css'

const list = [{
  id: 1,
  img: "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=720",
  text: "자연생활을 만끽할 수 있는 숙소"
}, {
  id: 2,
  img: "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720",
  text: "독특한 공간"
}, {
  id: 3,
  img: "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720",
  text: "집 전체"
}, {
  id: 4,
  img: "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720",
  text: "반려동물 동반 가능"
}]

function TravelStay() {
  return (
    <div className="stay_container">
      <div className="stay_container_sub">
        <div className="stay_header">
          어디에서나,여행은 살아보는 거야!
        </div>
        <div className="stay_list">
          {list.map((el) => {
            return (
              <div className="stay_list_sub">
                <img className="stay_list_img" src={el.img} alt="" />
                <div className="stay_list_textContainer">
                  <span className="stay_list_text">{el.text}</span>
                </div>
              </div>)
          })}
        </div>
      </div>
    </div>
  );
}

export default TravelStay