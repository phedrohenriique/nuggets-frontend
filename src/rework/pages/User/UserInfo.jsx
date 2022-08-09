import React from 'react'
import {
    Box,
    Button
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { colors } from '../../config/colors'
import { styles } from '../../config/styles'

export const UserInfo = (props) => {
    const parameters = useParams()
    return (
        <Box
            height="100%"
            width="100%"
            background={colors.pagesBackground}
            {...props}
        >
            {parameters.name}
        </Box>
    )
}