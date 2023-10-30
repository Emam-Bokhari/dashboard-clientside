import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import MyCart from "../pages/MyCart/MyCart";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Dashboard from "../components/Dashboard/Dashboard";
import ManageProducts from './../components/ManageProducts/ManageProducts';
import AddProducts from "../components/AddProducts/AddProducts";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/myCart",
                element: <MyCart />
            },
            {
                path: "/dashboardLayout",
                element: <DashboardLayout />,
                children: [
                    {
                        path: "/dashboardLayout",
                        element: <Dashboard />
                    },
                    {
                        path: "/dashboardLayout/addProducts",
                        element: <AddProducts />
                    },
                    {
                        path: "/dashboardLayout/manageProducts",
                        element: <ManageProducts />
                    }
                ]
            }
        ]
    }
])
export default Router