import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Login } from "../../pages/Login/Login";
import { Register } from "../../pages/Register/Register";
import { LeftImage } from "../../pages/LeftImage/LeftImage";
import { UserMain } from "../../pages/User/UserMain";
import { UserInfo } from "../../pages/User/UserInfo";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<>Home</>} />
            <Route path="/component" element={<>Component</>} />
            <Route path="/login" element={<LeftImage><Login /></LeftImage>} />
            <Route path="/register" element={<LeftImage><Register /></LeftImage>} />
            <Route path="/users/login" element={<UserMain />} >
                <Route path="/users/login/name=:name" element={<UserInfo />} />
                <Route path="/users/login/clients" element={<>clients</>}/>
                <Route path="/users/login/receit" element={<>receit</>}/>
            </Route>
            <Route path="*" element={<>Error 404</>} />
        </Routes>
    )
}
