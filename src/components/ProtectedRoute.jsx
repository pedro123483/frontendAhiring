import { Outlet, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const ProtectedRoute = () => {
    const token = cookies.get("TOKEN");

    return (
        token ? <Outlet /> : <Navigate to={"/"} />
    );
};