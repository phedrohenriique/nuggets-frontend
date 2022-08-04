import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react'
import { InputBasic } from '../Inputs/InputBasic'
import { styles } from '../../config/styles'

export const CardPassword = (props) => {
    const passwordRef = React.useRef(null)
    const confirmPasswordRef = React.useRef(null)


    const value_1 = passwordRef.current.value
    const value_2 = confirmPasswordRef.current.value


    const [data, setData] = React.useState({
        password: '',
        confirmPassword: ''
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
                onChange={(event) => { console.log("ref 1 : ",value_1); setData({ ...data, password: event.target.value }) }}
                ref={passwordRef}
            />
            <InputBasic
                placeholder="123abc"
                label="Confirm Password"
                type="password"
                onChange={(event) => {
                    console.log("ref 2 : ",value_2)
                    if (event.target.value === data.password) {
                        console.log("passwords match")
                        setData({ ...data, confirmPassword: event.target.value })
                        props.setData({ ...data });
                    }
                    if (event.target.value !== data.password) {
                        console.log("Error, password don't match, setting password")
                        //props.setData({ ...data, confirmPassword: event.target.value });
                    }
                }}
                ref={confirmPasswordRef}
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