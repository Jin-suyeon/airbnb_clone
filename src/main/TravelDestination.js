import React from 'react';
import './TravelDestination.css'

const list = [{
  id: 1,
  img: "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=240",
  url: "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
  place: "서울",
  time: "차로 15분 거리"
}, {
  id: 2,
  img: "https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240",
  url: "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
  place: "부산",
  time: "차로 5시간 거리"
}, {
  id: 3,
  img: "https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240",
  url: "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
  place: "양양군",
  time: "차로 2.5시간 거리"
}, {
  id: 4,
  img: "https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=240",
  url: "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
  place: "속초시",
  time: "차로 2.5시간 거리"
}, {
  id: 5,
  img: "https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=240",
  url: "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
  place: "제주도(Jeju)",
  time: "차로 7.5시간 거리"
}, {
  id: 6,
  img: "https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=240",
  url: "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
  place: "완주군",
  time: "차로 3시간 거리"
}, {
  id: 7,
  img: "https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=240",
  url: "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
  place: "고성군",
  time: "차로 3시간 거리"
}, {
  id: 8,
  img: "https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&im_w=240",
  url: "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
  place: "전주시",
  time: "차로 3시간 거리"
}]



function TravelDestination() {
  return (
    <div className="container">
      <div className="container_sub">
        <div className="header">
          <span className="header_sub">가까운 여행지 둘러보기</span>
        </div>
        <div className="list">
          {list.map((el) => {
            return (
              <a className="list_url" href={el.url}>
                <img className="list_img" src={el.img} alt="" />
                <div className="list_text">
                  <span className="list_place">{el.place}</span>
                  <span className="list_time">{el.time}</span>
                </div>
              </a>)
          })}
        </div>
      </div>
    </div>
  );
};

export default TravelDestination;