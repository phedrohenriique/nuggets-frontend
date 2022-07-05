import React from 'react'
import { Box } from '@chakra-ui/react'
import { styles } from '../../config/styles'
import { CardLogin } from '../../components/Cards/CardLogin'

export const Home = (props) => {
    return (
        <Box
            style={styles.pages}
        >
            <CardLogin />
        </Box>
    )
}