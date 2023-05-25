// imports requireds
import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

// this component only renders the child if the cookies is set
export const ProtectedRoute = () => {
    const token = cookies.get("TOKEN");

    return (
        token ? <Outlet /> : <Navigate to={"/"} />
    );
};