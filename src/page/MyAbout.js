import '../assest/MyAbout.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser, faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';


// 자기소개 페이지
const MyAbout = () => {  
    return (
        <div className="container">
            <div className='left-img-and-name'>
            <h1 className='title-name'>최서연</h1>
            <p className="sub-title">Choi Seo-yeon</p>
            <img src='../images/myimage1.png' className='myimage1' alt='myimage1' />
            </div>
            <div className="content">
            <div className='my-profile-texts'></div>
            <p className='just-profile-text'><strong> <FontAwesomeIcon icon={faUser} className='about-page-icons'/> </strong> 2001.05.29 (23세)</p>
            <p className='just-profile-text'><strong><FontAwesomeIcon icon={faPhone} className='about-page-icons'/>   </strong> 010-3302-9140</p>
            <p className='just-profile-text'><strong><FontAwesomeIcon icon={faEnvelope} className='about-page-icons'/></strong> cgo271111@gmail.com</p>
            <a className='just-profile-text-last'><strong><FontAwesomeIcon icon={faGithub} className='about-page-icons'/> https://github.com/seo-prog </strong></a>
            <br/>
            <h2 className='my-experience-texts'></h2>
            <p className='just-profile-text'><strong>2020.3   </strong> 호서대학교 입학</p>
            <p className='just-profile-text22'>빅데이터 AI 학과 전공</p>
            <p className='just-profile-text'><strong>2024.1 </strong> 하이미디어 아카데미 강남</p>
            <p className='just-profile-text22'>클라우드 기반의 자바 풀스택 (Spring, React, Flutter) 개발자 과정 수료</p>
        </div>
        </div>
    );
};

export default MyAbout;
