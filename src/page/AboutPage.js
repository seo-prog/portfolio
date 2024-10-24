import React from 'react';
import './AboutPage.css'; // CSS 파일 import
import { RiJavaLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { LiaJenkins } from "react-icons/lia";
import { TbBrandJavascript } from "react-icons/tb";

const AboutPage = () => {
    return (
        <div className="about-page">
            <h2>My Skills</h2>
            <div className="skills-container">
                <div>
                    <h3>Back</h3>
                    <ul>
                        <li>Spring <br/><br/>- spring 공부함</li>
                        <li>JPA</li>
                        <li>Java  <RiJavaLine /></li>
                        <li>MySQL  <SiMysql /></li>
                        <li>Docker  <FaDocker /></li>
                        <li>Jenkins  <LiaJenkins/></li>
                        <li>Aws</li>
                        <li>Uercel</li>
                    </ul>
                    </div>
                    <div>
                    <h3>Front</h3>
                    <ul>
                        <li>React  <FaReact /></li>
                        <li>Flutter</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript  <TbBrandJavascript /></li>
                    </ul>
                    </div>
                </div>
            </div>
       
    );
};

export default AboutPage;
