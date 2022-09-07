import React from 'react'
import {
    Box,
    Button,
    Link,
    LinkBox,
    LinkOverlay,
    Text
} from '@chakra-ui/react'
import { colors } from '../../config/colors'
import { styles } from '../../config/styles'

export const MenuNavigation = (props) => {
    return (
        <Box
            width="100%"
            height="20%"
            background={colors.pagesMenu}
            color="white"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            borderBottomWidth="2px"
            borderBottomColor="white"
        >
            <Box
                height="100%"
                width="100%"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
            >

                <LinkBox
                    padding="1em"
                    height="100%"
                    width="20%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <LinkOverlay href="/">
                        <Text fontSize="4xl" style={styles.textTitles}>NUGGETS PROJECT</Text>
                    </LinkOverlay>
                </LinkBox>
                <Box
                    height="100%"
                    width="60%"
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-around"
                >
                    <Link href="/" style={styles.linkComponent}>
                        <Button variant="linkButton">Home</Button>
                    </Link>
                    <Link href="/about" style={styles.linkComponent}>
                        <Button variant="linkButton">About</Button>
                    </Link>
                    <Link href="/products" style={styles.linkComponent}>
                        <Button variant="linkButton">Products</Button>
                    </Link>
                    <Link href="/register" style={styles.linkComponent}>
                        <Button variant="linkButton">Register</Button>
                    </Link>
                    <Link href="/login" style={styles.linkComponent}>
                        <Button variant="linkButton">Login</Button>
                    </Link>
                </Box>
                <Box
                    width="20%"
                    height="100%"
                >
                    
                </Box>
            </Box>
        </Box>
    )
}