import React from 'react'
import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { styles } from '../../config/styles'

export const UserInfo = (props) => {
    const parameters = useParams()
    return (
        <Box
            width="100%"
            height="100%"
            style={styles.pagesBasic}
            marginLeft="2.5%"
            >
            {parameters.name}
        </Box>
    )
}