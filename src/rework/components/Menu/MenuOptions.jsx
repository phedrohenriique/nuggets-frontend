import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { styles } from '../../config/styles'
import { useParams } from 'react-router-dom'

export const MenuOptions = (props) => {
    const parameters = useParams()

    return (
        <Box
            style={styles.menu}
            height="100%"
            width="100%"
            padding="1em"
            flexDirection="column"
            gap="1em"
            {...props}
        >
            <Box>
                <Text>
                    Welcome , {parameters.name} !
                </Text >
                <Box>
                    links
                </Box>
            </Box>
        </Box>
    )
}