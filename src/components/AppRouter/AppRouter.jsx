import React from "react";
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

import Client from '../../pages/Client';
import ClientDetails from '../../pages/ClientDetails';
import Dashboard from '../../pages/Dashboard';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Component from "../../pages/Component";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/component" element={<><Component /></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<PrivateRoute redirectTo='login' />} >
                <Route path="/" element={<Home />} />
                <Route path="/client" element={<ClientDetails />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

function PrivateRoute({ redirectTo }) {
    const { getItem } = useLocalStorage()
    const isAuthorized = getItem('token')
    return isAuthorized ? <Outlet /> : <Navigate to={redirectTo} />
}

// Template de teste do modal de edição do cliente
// import ClientEditModal from "../Modal/ClientEditModal"
{/* <Route path="/component" element={<><ClientEditModal
                id='8f02e55c-bb1d-4541-b494-b249692da1b4'
                name='Sara Lage Silva'
                email='sarasilva@gmail.com'
                phone='71 9 9462 8654'
                cpf='054 365 255 87'
                address='Rua das Cornélias; nº 512'
                complement='Ap: 502'
                district='Oliveiras'
                cep='031 654 524 04'
                city='Salvador'
                state='BA'
/></>} /> */}