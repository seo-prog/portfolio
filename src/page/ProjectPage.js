import '../assest/ProjectPage.css';

const ProjectPage = () => {
    return (
        <div className='project-page'>
            <h2> [ 프로젝트 경험 ] </h2>
            <br/>
            <br/>

            <div className='project-card'>
                <div className='project-images'>
                    <img src='../images/dingdong.png' className='project-img' alt='Dingdong' />
                    <div className='dingdong-App-images'>
                    <img src='../images/dingdongApp.png' className='project-img-App' alt='Dingdong App' />
                    <img src='../images/dingdongstudentApp.png' className='project-img-App' alt='Dingdong App' />
                    </div>
                    <img src='../images/dingdongWeb.png' className='project-img' alt='Dingdong Web' />
                </div>
                <div className='project-content'>
                    <p className='project-title'>1.  초등교사와 학생을 위한 학급 관리 시스템 (웹,모바일 백엔드/프론트엔드 개발)</p>
                    <p className='project-detail'>-- REST API 를 활용한 플러터 기반의 안드로이드 앱/웹 개발 프로젝트 우수상 수상</p>
                    <p><strong>- 교사의 웹/앱 과 학생의 앱을 분리하여 하이브리드 방식으로 소통이 가능하도록 개발</strong></p>
                    <p><strong>[ 개발 주요 사항 ]</strong></p>
                    <ul>
                    <li>- Spring MVC 를 이용한 백엔드 개발</li>
                    <li>- Flutter 를 이용한 모바일 앱 개발</li>
                    </ul>
                    <p> 개발 인원 : 5명 (풀스택 : 4명, 퍼블리셔 : 1명)</p>
                    <p> 개발 기간 : 2024.12.04 - 2024.01.23 (약 1달)</p>
                    <p><strong> [ 개발 환경 ] </strong></p>
                    <ul>
                        <li>Java 17</li>
                        <li>IDE: IntelliJ</li>
                        <li>Framework: Spring Boot 3.3.5</li>
                        <li>ORM: JPA</li>
                    </ul>
                    <p><strong>[ 담당한 부분 ]</strong></p>
                    <ul>
                    <li> 학급 좌석 랜덤돌리기 기능 개발</li>
                    <li> 학급 투표 페이지 개발</li>
                    <li> FCM 을 활용한 알림 기능 개발</li>
                    </ul>
                </div>`
                </div>
            
            <div className='project-card'>
                <div className ='project-images'>
                <img src='../images/wework.png' className='project-img2' alt='WeWork' />
                <img src='../images/WeworkHome.png' className='WeworkHome' alt='WeworkHome' />
                </div>
                <div className='project-content'>
                    <p className='project-title'>2.  업무 프로젝트를 위한 협업 프로그램 (웹 백엔드/프론트엔드 개발)</p>
                    <p><strong> [ 개발 주요 사항 ] </strong></p>
                    <ul>
                        <li>- Spring MVC 를 이용한 벡엔드 개발</li>
                        <li>- React 를 이용한 프론트엔드 개발</li>
                    </ul>`
                    <p> 개발 인원 : 4명 (풀스택)</p>
                    <p> 개발 기간 : 2024.10.26 - 2024.12.02 (약 1달)</p>

                    <p><strong> [ 개발 환경 ] </strong></p>`
                    <ul>
                        <li>Java 17</li>
                        <li>IDE: IntelliJ</li>
                        <li>Framework: Spring Boot 3.3.5</li>
                        <li>ORM: JPA</li>
                    </ul>
                    <br/>
                    <p><strong> [ 담당한 부분 ] </strong></p>
                    <ul>
                        <li>프로젝트 페이지 전반적인 생성 관리 </li>
                        <li>프로젝트 투표페이지 개발</li>
                        <li>프로젝트 메인페이지 </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
