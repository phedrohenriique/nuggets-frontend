import React from 'react'
import { styles } from '../../config/styles'
import {
    Box,
    Button,
    Text,
    useDisclosure,
    Slide,
    Link
} from '@chakra-ui/react'
import { colors } from '../../config/colors'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useParams } from 'react-router-dom'

export const MenuSide = (props) => {
    const { isOpen, onToggle } = useDisclosure()
    const parameters = useParams()

    return (
        <Box
            width="100%"
            height="100%"
            display="flex"
            flexDirection="row"
        >
            <Slide
                direction="left"
                zIndex="10"
                transition="0.5s"
                in={isOpen}
                {...props}
            >
                <Box
                    padding="1em"
                    background={colors.pagesMenu}
                    color="white"
                    width="20vw"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                >
                    <Link href="/users/login/clients"><Box>adadad</Box></Link>
                    <Box>adadad</Box>
                </Box>
            </Slide>
            <Box
                background={colors.pagesBackground}
                marginLeft={isOpen ? "20vw" : "0vw"}
                transition="0.5s"
                width={isOpen ? "80vw" : "100vw"}
                height="100%"
            >
                <Box
                    padding="1em"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    gap={2}
                >
                    <Box
                        padding="1em"
                        height="30%"
                        background={colors.pagesMenu}
                        borderRadius="10px"
                    >
                        <Button onClick={onToggle}>On Off</Button>
                    </Box>
                    <Box
                        padding="1em"
                        height="70%"
                        background={colors.pagesMenu}
                        borderRadius="10px"
                        color="white"
                    >
                        {props.children}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}