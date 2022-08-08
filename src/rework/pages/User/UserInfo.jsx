import React from 'react'
import { useParams } from 'react-router-dom'

export const UserInfo = (props) => {
    const parameters = useParams()
    return (
        <>
            {parameters.name}
        </>
    )
}