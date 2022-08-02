import React from 'react'
import { Box } from '@chakra-ui/react'
import { styles } from '../../config/styles'
import { CardLogin } from '../../components/Cards/CardLogin'
import { request } from '../../hooks/apis'

export const Home = () => {

    const jsonData = {
        name: "pedro",
        email: "pedro@mail.com",
        password: "123"
    }

    const dataHandlerGet = async () => {

        try {
            const response = await request.get("/users")
            const data = response.data
            console.log(data)
        }
        catch {

        }
    }

    const dataHandlerPost = async () => {
        try {
            const response = await request.post("/users", JSON.stringify(jsonData))
            console.log("response : ", response.status)
        }
        catch (error) {
            if (error.response) {
                console.log("Error at request")
            }
        }
    }

    React.useEffect(() => {
        dataHandlerGet()
    }, [])



    return (
        <Box
            style={styles.pages}
        >
            <CardLogin />
            <button type="submit" onClick={dataHandlerPost}>Testing post</button>
        </Box>
    )
}