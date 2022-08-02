import React from 'react'
import {
    Box,
    Text,
    Button,
    Link
} from '@chakra-ui/react'
import { InputBasic } from '../Inputs/InputBasic'
import { styles } from '../../config/styles'

export const CardLogin = () => {

    return (
        <Box
            style={styles.cardsFlexColumn}
            background="white"
            minWidth="25vw"
            minHeight="60vh"
            borderRadius={15}
            padding={6}
            gap={3}
        >
            <Text
                style={styles.textTitles}
                fontSize="2xl"
            >
                Login
            </Text>
            <InputBasic
                placeholder="user@mail.com"
                label="Email"
                type="text"
            />
            <InputBasic
                placeholder="123abc"
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
                minWidth="fit-content"
                gap={3}
            >
                <Button
                    maxWidth="50%"
                    fontSize="md"
                >
                    Login
                </Button>
                <Link
                    style={styles.linkComponent}
                    href="/register"
                    maxWidth="50%"
                >
                    <Button
                        fontSize="md"
                    >
                        Create Account
                    </Button>
                </Link>
            </Box>
            <Box
                style={styles.cardsFlexColumn}
                minHeight="fit-content"
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