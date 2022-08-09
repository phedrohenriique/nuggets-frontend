import React from 'react'
import { styles } from '../../config/styles'
import {
    Box,
} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { SideMenu } from '../../components/Menu/SideMenu'
import { OptionsMenu } from '../../components/Menu/OptionsMenu'

export const UserMain = (props) => {
    const [open, setOpen] = React.useState(false)

    return (
        <Box
            style={styles.pagesBasic}

        >
            <SideMenu
                open={open}
                setOpen={setOpen}
                color="white"
             />
                
            <Outlet />
        </Box>
    )
}