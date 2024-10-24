
import { useNavigate } from "react-router-dom";
import "./TopHeaders.css";

// 옵션 바 
const TopHeader = () => {
// 주석
    const nevi = useNavigate();
    return(
        <header className="header">

            <button onClick={()=>nevi("/HomePage")}>HOME</button>
            <button onClick={()=>nevi("/about")}>ABOUT</button>
            <button onClick={()=>nevi("/blog")}>BLOG</button>
            <button onClick={()=>nevi("/project")}>PROJECT</button>
            <button onClick={()=>nevi("/github")}>GITHUB</button>
            
        </header>
    )
}
export default TopHeader; 