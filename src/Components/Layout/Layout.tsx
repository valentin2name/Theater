import { Outlet } from "react-router-dom";
import WrappMenu from "../WrappMenu/WrappMenu";

const Layout = () => {
    return (
        <div>
            <WrappMenu />
            <Outlet />
        </div>
    );
}
 
export default Layout;