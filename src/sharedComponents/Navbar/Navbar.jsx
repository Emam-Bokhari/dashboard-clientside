import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between shadow-lg py-6 rounded-md px-6" >

                {/* empty div for flex alignment the navbar */}
                <div>

                </div>

                {/* navlink */}
                <ul className="flex gap-5" >
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/products" >Products</Link>
                    </li>
                    <li>
                        <Link to="/myCart" >My Cart</Link>
                    </li>
                    <li><Link to="/dashboardLayout" >Dashboard</Link></li>
                </ul>

                {/* button */}
                <div>
                    <button className="bg-lime-200 px-3 py-1 rounded" >Login</button>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;