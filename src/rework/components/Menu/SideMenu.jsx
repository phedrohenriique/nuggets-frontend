import React from 'react'
import { styles } from '../../config/styles'
import {
    Box,
    Button,
    Text
} from '@chakra-ui/react'
import { colors } from '../../config/colors'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useParams } from 'react-router-dom'

export const SideMenu = (props) => {
    const parameters = useParams()

    return (
        <Box
            height="100vh"
            width={props.open ? "30vw" : "0vw"}
            transition="0.5s"
            style={styles.menu}
            flexDirection="row"
            {...props}
            zIndex="1"
        >
            <Box
                transition="0s"
                style={styles.menu}
                height="100%"
                width="90%"
                padding="1em"
                flexDirection="column"
                gap="1em"

            >
                {props.open
                    ? <><Text>
                        Welcome , {parameters.name} !
                    </Text >
                        <Box>
                            links
                        </Box>
                    </>
                    : ""
                }
            </Box>
            <Box
                display="flex"
                flexDirection="row"
                background={colors.pagesMenu}
                borderRight="2px solid white"
            >
                <Button
                    _active={{ background: colors.pagesBackground }}
                    marginTop="50px"
                    size="md"
                    borderRadius="50%"
                    border="2px solid white"
                    position="relative"
                    left="50%"
                    onClick={() => {
                        props.setOpen(!props.open)
                    }}
                >
                    {
                        props.open
                            ? <FiArrowLeft />
                            : <FiArrowRight />
                    }
                </Button>
            </Box>
        </Box>

    )
}