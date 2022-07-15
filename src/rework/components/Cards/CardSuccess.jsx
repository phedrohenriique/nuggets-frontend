import React from 'react'
import {
    Box,
    Text,
    Link,
    Button
} from '@chakra-ui/react'
import { styles } from '../../config/styles'

export const CardSuccess = (props) => {

    return (
        <Box
            style={styles.cardsFlexColumn}
            background="white"
            minWidth="20vw"
            minHeight="60vh"
            borderRadius={15}
            padding={3}
            gap={3}
        >
            <Text
                style={styles.textTitles}
                fontSize="2xl"
            >
                Registration Complete !
            </Text>
        </Box>
    )
}