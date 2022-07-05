import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { InputBasic } from '../Inputs/InputBasic'
import { ButtonBasic } from '../Buttons/ButtonBasic'
import { styles } from '../../config/styles'

export const CardLogin = (props) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            background="white"
            minWidth="30vw"
            minHeight="60vh"
            borderRadius="5%"
            padding="2%"
            gap={3}
        >
            <Text
            style={styles.textTitles}
            
            >
                Faça Seu Login !
            </Text>
            <InputBasic />
            <ButtonBasic >Button</ButtonBasic>
        </Box>
    )
}