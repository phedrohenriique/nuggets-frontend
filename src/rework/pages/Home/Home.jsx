import React from 'react'
import {
    Box,
    Text,
    Image
} from '@chakra-ui/react'
import { MenuNavigation } from '../../components/Menu/MenuNavigation'
import { ContentHome } from '../../components/Contents/ContentHome'
import { FooterBasic } from '../../components/Footer/FooterBasic'
import { colors } from '../../config/colors'
import { styles } from '../../config/styles'
import mountainsOne from '../../assets/mountains_01.jpg'

export const Home = (props) => {
    return (
        <Box
            width="100vw"
            height="100vh"
            display="flex"
            flexDirection="column"
        >
            <MenuNavigation />
            <ContentHome />
        </Box>
    )
}