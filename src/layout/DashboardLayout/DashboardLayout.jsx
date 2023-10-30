
import { Outlet } from 'react-router-dom';
import DashboardMenus from './../../sharedComponents/DashboardMenus/DashboardMenus';
const DashboardLayout = () => {
    return (
        <div>

            <div className="grid grid-cols-12 gap-10 " >

                {/* menus */}
            <div className="col-span-4" >
                <DashboardMenus />
            </div>

            {/* outlet */}
            <div className="shadow-md rounded-md p-6  col-span-8 h-[700px] overflow-scroll overflow-x-hidden" >
                <Outlet />
            </div>

            </div>


        </div>
    );
};

export default DashboardLayout;