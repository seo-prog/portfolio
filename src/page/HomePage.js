import React, { useRef } from "react";
import "../assest/HomePage.css";
import MyAbout from "./MyAbout";  // 소개 페이지 import

const HomePage = () => {
  const aboutRef = useRef(null); // MyAbout을 참조할 ref 생성

  // 스크롤 내릴 때 MyAbout으로 이동
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="homepage-container">
      {/* 홈 화면 */}
      <div className="homepage">
        <img src="../images/myicon.png" className="homepage-img" alt="Profile" />
        <div className="text-container">
          <h4 className="home-page-title">유쾌한 소통이 가능한 개발자!</h4>
          <div className="intro">
            항상 열정을 가지고 배운 내용을 흡수하기 위해 노력했습니다.  
            하지만 남들보다 뛰어난 "나의 강점"을 생각해 보았을 때,  
            배움의 면으로 과연 뛰어나다고 할 수 있을까? 라는 생각이 들었습니다.  
            이로써 생각할 수 있었던 저의 장점은 "소통" 이였습니다.  
            좋은 소통과 의견 나눔이 가능한 사람으로서, 그런 개발자가 되기 위해 더욱 노력하겠습니다 !
          </div>
          <button className="scroll-button" onClick={scrollToAbout}>
            내 소개 보기 ↓
          </button>
        </div>
      </div>

      {/* 소개 페이지 (스크롤 이동 대상) */}
      <div ref={aboutRef}>
        <MyAbout />
      </div>
    </div>
  );
};

export default HomePage;
