import React from 'react'
import { useFetch } from '../../hooks/fetch'
import { Box } from '@chakra-ui/react'
import { styles } from '../../config/styles'
import { CardLogin } from '../../components/Cards/CardLogin'

export const Home = (props) => {
    const { getFetch } = useFetch()
    const [data, setData] = React.useState([])

    const dataHandler = async () => {
        await getFetch()
    }

    React.useEffect(() => {
        dataHandler()
    }, [data])

    return (
        <Box
            style={styles.pages}
        >
            <CardLogin />
        </Box>
    )
}