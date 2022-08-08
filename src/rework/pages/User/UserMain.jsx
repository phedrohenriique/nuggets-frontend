import React from 'react'
import { styles } from '../../config/styles'
import {
    Box,
    Button
} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

export const UserMain = (props) => {
    return (
        <Box
            style={styles.pagesBasic}

        >
            <Box
                height="100vh"
                width="30vw"
                style={styles.menu}
            >
                <Button
                    size="md"
                    borderRadius="50%"
                    border="2px solid black"
                    position="absolute"
                    left="28.5%"
                    top="10%"
                />
            </Box>
            <Outlet />
        </Box>
    )
}