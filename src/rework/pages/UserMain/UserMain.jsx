import React from 'react'
import { Outlet } from 'react-router-dom'

export const UserMain = (props) => {
    return (
        <div>
            <Outlet />
        </div>
    )
}