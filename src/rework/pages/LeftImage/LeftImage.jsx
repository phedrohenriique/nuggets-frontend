import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import image from '../../assets/image_application.webp'

export const LeftImage = (props) => {
    return (
        <Box
            width="100vw"
            height="100vh"
            display="flex"
            flexDirection="row"
        >
            <Image height="100vh" width="40vw" src={image} />
            {props.children}
        </Box>
    )
}

