import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react'
import { InputBasic } from '../Inputs/InputBasic'
import { styles } from '../../config/styles'

export const CardRegister = (props) => {

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
                Register
            </Text>
            <InputBasic
                placeholder="Name Surname"
                label="Name"
                type="text"
            />
            <InputBasic
                placeholder="user@mail.com"
                label="Email"
                type="text"
            />
            <Box
                style={styles.cardsFlexRow}
                minWidth="fit-content"
                gap={3}
            >
            </Box>
        </Box>
    )
}