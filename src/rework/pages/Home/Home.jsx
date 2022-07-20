import React from 'react'
import { Box } from '@chakra-ui/react'
import { styles } from '../../config/styles'
import { CardLogin } from '../../components/Cards/CardLogin'
import { request } from '../../hooks/apis'

export const Home = (props) => {
    const [fetchData, setFetchData] = React.useState(null)

    async function dataHandler() {

        try {
            const response = await request.get("/users")
            const data = response.data
            console.log(data)
        }
        catch {

        }
    }

    React.useEffect(() => {
        dataHandler()
    }, [])



    return (
        <Box
            style={styles.pages}
        >
            <CardLogin />
            <button type="submit" onClick={() => {

            }}>Testing post</button>
        </Box>
    )
}