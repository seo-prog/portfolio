
import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeaders";


const Layout = () => {
    return(
        <>
        <TopHeader/>
        <Outlet/>
        </>
    )
}
export default Layout;