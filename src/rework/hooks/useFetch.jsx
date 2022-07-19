import React from 'react'

export default function useFetch() {

    const useGet = (url, token = '') => {
        const [data, setData] = React.useState(null)

        const requestOptions = {
            method: "GET",
            headers: {
            },
            authorization: `Bearer ${token}`
        }

        // if (token) {
        //     const requestOptions = {
        //         method: "GET",
        //         headers: {
        //         },
        //         authorization: `Bearer ${token}`
        //     }
        // }

        React.useEffect(() => {
            fetch(url, requestOptions)
                .then((response) => { return response.json() })
                .catch((error) => { console.log(error) })
                .then((data) => {
                    setData(data)
                })

        }, [url])


        return data

    }

    const handlerPost = (url, body, token = '') => {

        const requestOptions = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            },
            authorization: `Bearer ${token}`,
            body: JSON.stringify(body)
        }

        fetch(url, requestOptions)
            .then((response) => { console.log(response) })
            .catch((error) => { console.log("error at request : ", `${error}`) })

    }

    const usePatch = () => {

    }

    return [
        useGet,
        handlerPost
    ]
}


