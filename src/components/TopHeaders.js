import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// 옵션 바 
const TopHeader = () => {

    const nevi = useNavigate();
    return(
        <header>

            <button onClick={()=>nevi("/HomePage")}>HOME</button>
            <button onClick={()=>nevi("/about")}>ABOUT</button>
            <button onClick={()=>nevi("/blog")}>BLOG</button>
            <button onClick={()=>nevi("/project")}>PROJECT</button>
            <button onClick={()=>nevi("/github")}>GITHUB</button>
            
        </header>
    )
}
export default TopHeader;