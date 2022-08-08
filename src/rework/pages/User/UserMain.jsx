import React from 'react'
import { styles } from '../../config/styles'
import {
    Box,
    Button
} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { colors } from '../../config/colors'

export const UserMain = (props) => {
    const [isOpen, setOpen] = React.useState(false)

    const sideMenu = {
        openWidth: "30vw",
        closeWidth: "0vw"
    }

    return (
        <Box
            style={styles.pagesBasic}

        >
            <Box
                height="100vh"
                width={isOpen ? "30vw" : "0vw"}
                style={styles.menu}
                flexDirection="row"
            >
                <Box
                    width="100%"
                >

                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    background={colors.pagesMenu}
                >
                    <Button
                        marginTop="50px"
                        size="md"
                        borderRadius="50%"
                        border="1px solid black"
                        position="relative"
                        left="20px"
                        onClick={() => {
                            setOpen(!isOpen)
                        }}
                    >
                        {
                            isOpen
                                ? "<"
                                : ">"
                        }
                    </Button>
                </Box>
            </Box>
            <Outlet />
        </Box>
    )
}