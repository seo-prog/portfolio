import React, { useState } from 'react';
import { RiJavaLine } from "react-icons/ri";
import { FaReact, FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { LiaJenkins } from "react-icons/lia";
import { TbBrandJavascript } from "react-icons/tb";
import '../assest/AboutPage.css';

const AboutPage = () => {
    const descriptions = {
        Java: "객체지향 프로그래밍 언어, 백엔드 개발의 기본",
        MySQL: "관계형 데이터베이스 관리 시스템",
        Docker: "컨테이너 기반 가상화 기술",
        Jenkins: "CI/CD 자동화 도구",
        React: "프론트엔드 라이브러리, 컴포넌트 기반 UI",
        JavaScript: "웹 개발의 필수 언어",
    };

    return (
        <div className="about-page">
            <h2 className='about-page-h2'>My Skills</h2>
            <div className="skills-container">
                <div>
                    <h3 className='about-page-h3'>Back-End</h3>
                    <ul className='about-page-ul'>
                        <li className='about-page-li'>
                            Spring <RiJavaLine />
                            <span className="tooltip">{descriptions.Java}</span>
                        </li>
                        <li className='about-page-li'>
                            JPA <RiJavaLine />
                            <span className="tooltip">{descriptions.Java}</span>
                        </li>
                        <li className='about-page-li'>
                            Java <RiJavaLine />
                            <span className="tooltip">{descriptions.Java}</span>
                        </li>
                        <li className='about-page-li'>
                            MySQL <SiMysql />
                            <span className="tooltip">{descriptions.MySQL}</span>
                        </li>
                        <li className='about-page-li'>
                            Docker <FaDocker />
                            <span className="tooltip">{descriptions.Docker}</span>
                        </li>
                        <li className='about-page-li'>
                            Jenkins <LiaJenkins />
                            <span className="tooltip">{descriptions.Jenkins}</span>
                        </li>
                        <li className='about-page-li'>
                        Aws <FaDocker />
                            <span className="tooltip">{descriptions.Docker}</span>
                        </li>
                        <li className='about-page-li'>
                            Vercel <FaDocker />
                            <span className="tooltip">{descriptions.Docker}</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className='about-page-h3'>Front-End</h3>
                    <ul className='about-page-ul'>
                    <li className='about-page-li'>
                            React <FaReact />
                            <span className="tooltip">{descriptions.React}</span>
                        </li>
                        <li className='about-page-li'>
                            Flutter .. <TbBrandJavascript />
                            <span className="tooltip">{descriptions.JavaScript}</span>
                        </li>
                        <li className='about-page-li'>
                            JavaScript <TbBrandJavascript />
                            <span className="tooltip">{descriptions.JavaScript}</span>
                        </li>
                        <li className='about-page-li'>
                        HTML .. <TbBrandJavascript />
                            <span className="tooltip">{descriptions.JavaScript}</span>
                        </li>
                        <li className='about-page-li'>
                        CSS <TbBrandJavascript />
                            <span className="tooltip">{descriptions.JavaScript}</span>...
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
