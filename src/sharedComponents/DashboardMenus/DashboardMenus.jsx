import { Link } from "react-router-dom";

const DashboardMenus = () => {
    return (
        <div>
            
            {/* navlink */}
            <nav className="shadow-lg h-[700px]" >
                <ul className="space-y-3 p-4" >
                    <li className="hover:bg-blue-100 py-3 px-6 rounded" ><Link to="/dashboardLayout" >Home</Link></li>
                    <li className="hover:bg-blue-100 py-3 px-6 rounded" ><Link to="/dashboardLayout/addProducts" >Add Products</Link></li>
                    <li className="hover:bg-blue-100 py-3 px-6 rounded" ><Link to="/dashboardLayout/manageProducts" >Manage Products</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default DashboardMenus;