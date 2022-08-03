import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react'
import { InputBasic } from '../Inputs/InputBasic'
import { styles } from '../../config/styles'

export const CardPassword = (props) => {
    const [data, setData] = React.useState({
        password: '',
        confirmedPassword: false
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
                Password
            </Text>
            <InputBasic
                placeholder="123abc"
                label="Password"
                type="password"
                onChange={(event) => { setData({ ...data, password: event.target.value }) }}
            />
            <InputBasic
                placeholder="123abc"
                label="Confirm Password"
                type="password"
                onChange={(event) => {
                    if (event.target.value === data.password) {
                        console.log("passwords match")
                        setData({ ...data, confirmedPassword: true })
                        props.setData({ ...data });
                    }
                    else {
                        console.log("Error, password don't match, setting password")
                        props.setData({ ...data, confirmedPassword: false });
                    }
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