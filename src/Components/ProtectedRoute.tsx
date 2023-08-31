import { useCookies } from "react-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import React from "react";

function ProtectedRoute({
    redirectPath='/signin',
    children
}:any){
    const [cookies] = useCookies(["token"]);
    const location =useLocation ();
    if(!cookies.token){
        return <Navigate to={redirectPath} replace state={{from:location}}/>
    }
    return children || <Outlet/>
}
export default ProtectedRoute