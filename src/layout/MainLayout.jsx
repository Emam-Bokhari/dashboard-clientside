import Navbar from "../sharedComponents/Navbar/Navbar";

import {Outlet} from "react-router-dom"

const MainLayout = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 my-10" >

            {/* Navbar */}
            <Navbar />

            {/* Outlet */}
            <div className="my-10" >
            <Outlet/>
            </div>
            
        </div>
    );
};

export default MainLayout;