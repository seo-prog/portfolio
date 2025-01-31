
import { useNavigate } from "react-router-dom";
import '../assest/TopHeaders.css';

// 옵션 바 
const TopHeader = () => {
// 주석
    const nevi = useNavigate();
    return(
        <header className="header">

            <button onClick={()=>nevi("/HomePage")}>홈</button>
            <button onClick={()=>nevi("/MyAbout")}>자기소개</button>
            <button onClick={()=>nevi("/about")}>기술 스택</button>
            <button onClick={()=>nevi("/project")}>프로젝트</button>
            <button onClick={()=>nevi("/github")}>CONTACK</button>
            
        </header>
    )
}
export default TopHeader; 