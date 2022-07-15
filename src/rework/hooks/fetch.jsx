import React from "react"

export const useFetch = () => {

    const getFetch = async () => {

        const options = {
            method: "GET",
            headers: {
            }
        }

        try {
            console.log("fetch working")
            const response = await fetch("http://localhost:8800/users", options)
            console.log("response : ", response)
            const data = await response.json()
            console.log("response : ", data)
        }
        catch {
            console.log("error")
        }
    }

    return {
        getFetch
    }
}