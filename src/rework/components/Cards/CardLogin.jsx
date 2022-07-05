import React from 'react'
import {
    Box,
    Text,
    Button
} from '@chakra-ui/react'
import { InputBasic } from '../Inputs/InputBasic'
import { ButtonBasic } from '../Buttons/ButtonBasic'
import { styles } from '../../config/styles'

export const CardLogin = (props) => {



    return (
        <Box
            style={styles.cardsFlexColumn}
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
            <InputBasic
                label={"Label"}
                onChange={(event) => { console.log(event.target.value); return event.target.value }}
            />
            <ButtonBasic >Button</ButtonBasic>
            <Button>Standard Button</Button>
        </Box>
    )
}