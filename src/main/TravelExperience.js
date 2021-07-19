import React from 'react';
import './TravelExperience.css'

const list = [{
  id: 1,
  img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=720",
  maintext: "체험",
  text: "가까운 곳에서 즐길 수 있는 잊지 못할 체험을 찾아보세요."
}, {
  id: 2,
  img: "https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=720",
  maintext: "온라인 체험",
  text: "호스트와 실시간으로 소통하면서 액티비티를 즐겨보세요."
}, {
  id: 3,
  img: "https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=720",
  maintext: "추천 컬렉션: 여행 본능을 깨우는 체험",
  text: "온라인 체험으로 집에서 랜선 여행을 즐기세요."
}]

function TravelExperience(){
  return(
    <div className="experience_container">
    <div className="experience_container_sub">
      <div className="experience_header">
        특별한 즐길 거리를 찾아보세요
      </div>
      <div className="experience_list">
        {list.map((el) => {
          return (
            <div className="experience_list_sub">
              <img className="experience_list_img" src={el.img} alt="" />
              <div className="experience_list_textContainer">
                <span className="experience_list_maintext">{el.maintext}</span>
                <span className="experience_list_text">{el.text}</span>
              </div>
            </div>)
        })}
      </div>
    </div>
  </div>
);
}

export default TravelExperience