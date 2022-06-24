import { useState } from 'react'

export const request = {
    post: '',
    put: '',
    delete: ''
}

// https://viacep.com.br/ws/01001000/json/

export const getMethod = async ()=>{

    const data  = await fetch(`https://viacep.com.br/ws/01001000/json/`)
    const response = await data.json()

    return response
}


const postMethod = (url, body) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    }

    return fetch(`${url}`, requestOptions).then((response) => {
        return response
    })

}

const putMethod = () => {

}

const deleteMethod = () => {

}
