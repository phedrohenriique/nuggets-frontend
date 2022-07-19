import React from 'react'
import { Box } from '@chakra-ui/react'
import { styles } from '../../config/styles'
import { CardLogin } from '../../components/Cards/CardLogin'
import useFetch from '../../hooks/useFetch'

export const Home = (props) => {
    const [useGet, handlerPost] = useFetch()
    const payload = {
        name: "one",
        email: "one@mail.com",
        password: "123"
    }

    const testHandler = () => {

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(payload)
        }

        fetch("http://localhost:8800/users", requestOptions)
            .then((response) => { console.log("response status : ", response); return response.status })
            .catch((error) => { console.log("error at request : ", `${error}`) })


    }

    React.useEffect(() => {
        //console.log("data home : ", data)
    }, [])

    return (
        <Box
            style={styles.pages}
        >
            <CardLogin />
            <button type="submit" onClick={() => {
                //handlerPost("http://localhost:8800/users", payload) 
                testHandler()
            }}>Testing post</button>
        </Box>
    )
}