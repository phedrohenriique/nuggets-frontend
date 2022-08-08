import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Home } from "../../pages/Home/Home";
import { Register } from "../../pages/Register/Register";
import { LeftImage } from "../../pages/LeftImage/LeftImage";
import { UserMain } from "../../pages/UserMain/UserMain";
import { UserInfo } from "../../pages/UserMain/UserInfo";

export default function Router() {
    return (
        <Routes>
            <Route path="/component" element={<>Component</>} />
            <Route path="/register" element={<LeftImage><Register /></LeftImage>} />
            <Route path="/" element={<LeftImage><Home /></LeftImage>} />
            <Route path="/users/login" element={<UserMain />} >
                <Route path="/users/login/:name" element={<UserInfo />} />
            </Route>
            <Route path="*" element={<>Error 404</>} />
        </Routes>
    )
}

// function PrivateRoute({ redirectTo }) {
//     const { getItem } = useLocalStorage()
//     const isAuthorized = getItem('token')
//     return isAuthorized ? <Outlet /> : <Navigate to={redirectTo} />
// }

