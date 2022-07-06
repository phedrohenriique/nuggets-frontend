import React from 'react'
import {
    Box,
    Text,
    Button,
    Link
} from '@chakra-ui/react'
import { InputBasic } from '../Inputs/InputBasic'
import { ButtonBasic } from '../Buttons/ButtonBasic'
import { styles } from '../../config/styles'

export const CardLogin = (props) => {



    return (
        <Box
            style={styles.cardsFlexColumn}
            background="white"
            minWidth="30vw"
            minHeight="60vh"
            borderRadius="5%"
            padding="2%"
            gap={3}
        >
            <Text
                style={styles.textTitles}
                fontSize="2xl"
            >
                Login
            </Text>
            <InputBasic
                label="Email"
                type="text"
            />
            <InputBasic
                label="Password"
                type="text"
            />
            <Link
                alignSelf="flex-start"
                style={styles.link}
            >
                Forgot Password ?
            </Link>
            <Box
                style={styles.cardsFlexRow}
                width="100%"
                gap={3}
            >
                <Button
                    fontSize="md"
                    width="50%"
                >
                    Login
                </Button>
                <Link
                style={styles.linkComponent}
                href="/register"
                >
                    <Button
                        fontSize="md"
                        width="fit-content"
                    >
                        Create Account
                    </Button>
                </Link>
            </Box>
            <Box
                style={styles.cardsFlexColumn}
            >
                <Text
                    style={styles.textTitles}
                >
                    Or Enter With :
                </Text>
                <Box
                    style={styles.cardsFlexRow}
                    gap={3}
                >
                    <Box width="50px" height="50px" background="red" />
                    <Box width="50px" height="50px" background="blue" />
                </Box>
            </Box>
        </Box>
    )
}