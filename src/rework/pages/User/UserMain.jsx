import React from 'react'
import {
    Box,
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