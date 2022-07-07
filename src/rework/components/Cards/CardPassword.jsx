import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react'
import { InputBasic } from '../Inputs/InputBasic'
import { styles } from '../../config/styles'

export const CardPassword = (props) => {

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
                Password
            </Text>
            <InputBasic
                placeholder="123abc"
                label="Password"
                type="password"
            />
            <InputBasic
                placeholder="123abc"
                label="Confirm Password"
                type="password"
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