import React from "react";
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Home } from "../../rework/pages/Home/Home";
import { Register } from "../../rework/components/Cards/Register/Register";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/component" element={<>Component</>} />
            <Route path="/login" element={<>Login</>} />
            <Route path="/register" element={<Register />} />
            {/* <Route element={<PrivateRoute redirectTo='login' />} > */}
            <Route path="/" element={<Home />} />
            <Route path="/client" element={<>ClientDetails</>} />
            <Route path="/dashboard" element={<>Dashboard</>} />
            {/* </Route> */}
            <Route path="*" element={<>Error 404</>} />
        </Routes>
    )
}

// function PrivateRoute({ redirectTo }) {
//     const { getItem } = useLocalStorage()
//     const isAuthorized = getItem('token')
//     return isAuthorized ? <Outlet /> : <Navigate to={redirectTo} />
// }

