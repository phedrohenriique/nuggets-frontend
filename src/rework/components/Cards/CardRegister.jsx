import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react'
import { InputBasic } from '../Inputs/InputBasic'
import { styles } from '../../config/styles'

export const CardRegister = (props) => {

    const [data, setData] = React.useState({
        name: '',
        email: ''
    })

    return (
        <Box
            style={styles.cardsFlexColumn}
            background="white"
            minWidth="20vw"
            minHeight="60vh"
            borderRadius={15}
            padding={3}
            gap={3}
        >
            <Text
                style={styles.textTitles}
                fontSize="2xl"
            >
                Register
            </Text>
            <InputBasic
                placeholder="Name Surname"
                label="Name"
                type="text"
                onChange={(event) => {
                    setData({ ...data, name: event.target.value })
                    props.setData({ ...data })
                }}
            />
            <InputBasic
                placeholder="user@mail.com"
                label="Email"
                type="text"
                onChange={(event) => {
                    setData({ ...data, email: event.target.value })
                    props.setData({ ...data })
                }}
            />
            <Box
                style={styles.cardsFlexRow}
                minWidth="fit-content"
                gap={3}
            >
            </Box>
        </Box>
    )
}