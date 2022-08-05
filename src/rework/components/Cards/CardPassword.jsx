import React from 'react'
import {
    Box,
    Text,
    Button,
    FormControl
} from '@chakra-ui/react'
import { InputBasic } from '../Inputs/InputBasic'
import { styles } from '../../config/styles'
import { request } from '../../hooks/apis'

export const CardPassword = (props) => {
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [formError, setFormError] = React.useState(false)

    const submitHandler = async () => {

        const data = { ...props.postData, password: password, confirmPassword: confirmPassword }

        if (data.password !== data.confirmPassword) {
            setFormError(true)
            console.log("passwords don't match, try again please")
            return
        }

        try {
            const response = await request.post("/users", JSON.stringify(data))
            props.nextStep(3)
            console.log(response.status)
        }
        catch (error) {
            console.log(error.response.message)
        }


    }

    return (
        <FormControl
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
                type="text"
                onChange={(event) => { setPassword(event.target.value) }}
            />
            <InputBasic
                placeholder="123abc"
                label="Confirm Password"
                type="text"
                onChange={(event) => { setConfirmPassword(event.target.value) }}
            />
            {
                formError
                    ? <Text style={styles.errorText}>Passwords don't match, key again please</Text>
                    : ''
            }
            <Box
                style={styles.cardsFlexRow}
                minWidth="fit-content"
                gap={3}
            >
            </Box>
            <Box
                width="100%"
                display="flex"
                flexDirection="row"
                gap={2}
            >
                <Button width="50%" onClick={() => {
                    //setFormError(false)
                    props.prevStep(1)
                }}>
                    Previous
                </Button>
                <Button width="50%" onClick={() => { submitHandler() }} >
                    Submit
                </Button>
            </Box>
        </FormControl>
    )

}