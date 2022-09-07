import React from 'react'
import {
    Box,
} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { MenuNavigation } from '../../components/Menu/MenuNavigation'
import { FooterBasic } from '../../components/Footer/FooterBasic'

export const Home = (props) => {
    return (
        <Box
            width="100vw"
            height="100vh"
            display="flex"
            flexDirection="column"
        >
            <MenuNavigation />
            <Outlet />
        </Box>
    )
}