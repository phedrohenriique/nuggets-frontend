import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import { styles } from '../../config/styles'
import { CardLogin } from '../../components/Cards/CardLogin'
import image from '../../assets/image_application.webp'

export const Home = () => {

    return (
        <Box
            style={styles.pages}
        >
            <CardLogin />
            {/* <button type="submit" onClick={dataHandlerPost}>Testing post</button> */}
        </Box >
    )
}