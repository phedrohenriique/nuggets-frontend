import React from 'react'
import {
    Box,
    Text,
    Link,
    Button,
    FormControl
} from '@chakra-ui/react'
import { InputBasic } from '../Inputs/InputBasic'
import { styles } from '../../config/styles'

export const CardRegister = (props) => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [formError, setFormError] = React.useState(false)
    const submitHandler = () => {

        if (name !== '' && email !== '') {
            props.nextStep(1)
            props.dataHandler({ name: name, email: email })
        }
        else {
            console.log("form fields are empty, fill the inputs")
            setFormError(true)
        }


    }

    return (
        <FormControl
            style={styles.cardsFlexColumn}
            background="white"
            minWidth="100%"
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
                onChange={(event) => { setName(event.target.value) }}
            />
            <InputBasic
                placeholder="user@mail.com"
                label="Email"
                type="text"
                onChange={(event) => { setEmail(event.target.value) }}
            />
            {
                formError
                    ? <Text style={styles.errorText}>Form fields are empty, fill the inputs</Text>
                    : ''
            }
            <Box
                display="flex"
                width="100%"
                flexDirection="row"
                gap="1em"
            >
                <Link width="50%" href="/" style={styles.linkComponent}>
                    <Button width="100%">
                        Already Registered !
                    </Button>
                </Link>
                <Button type="button" width="50%" onClick={() => {
                    submitHandler()
                }}>
                    Confirm
                </Button>
            </Box>
        </FormControl>
    )
}