import React from 'react'
import { styles } from '../../config/styles'
import { colors } from '../../config/colors'
import {
    Box,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { MenuSide } from '../../components/Menu/MenuSide'

export const UserMain = (props) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Box
            width="100vw"
            height="100vh"
            display="flex"
            flexDirection="row"
        >
            <MenuSide>
                <Outlet onToggle={onToggle} />
            </MenuSide>
        </Box>
    )
}