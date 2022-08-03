import React from 'react'
import {
    Box,
    Text,
    Button,
    Link
} from '@chakra-ui/react'
import { request } from '../../hooks/apis'
import { InputBasic } from '../Inputs/InputBasic'
import { styles } from '../../config/styles'
import { useNavigate, useParams } from 'react-router-dom'

export const CardLogin = () => {
    const [loginData, setLoginData] = React.useState({})
    const emailRef = React.useRef(null)
    const passwordRef = React.useRef(null)
    const parameters = useParams()
    const navigate = useNavigate()

    // const dataHandler = () => {

    //     // setLoginData({
    //     //     email: emailRef.current.value,
    //     //     password: passwordRef.current.value
    //     // })


    // }


    const loginHandler = async () => {
        // setLoginData({
        //     email: emailRef.current.value,
        //     password: passwordRef.current.value
        // })
        navigate(`/users/${parameters.id}`)
        console.log("loginData : ", JSON.stringify(loginData))
        const response = await request.post("/users/login", loginData)
        console.log("response : ", response)
        

    }

    React.useEffect(() => {
    }, [])

    return (
        <Box
            style={styles.cardsFlexColumn}
            background="white"
            minWidth="25vw"
            minHeight="60vh"
            borderRadius={15}
            padding={6}
            gap={3}
        >
            <Text
                style={styles.textTitles}
                fontSize="2xl"
            >
                Login
            </Text>
            <InputBasic
                placeholder="user@mail.com"
                label="Email"
                type="text"
                ref={emailRef}
                onChange={(event) => { setLoginData({ ...loginData, email: event.target.value }) }}
            />
            <InputBasic
                placeholder="123abc"
                label="Password"
                type="text"
                ref={passwordRef}
                onChange={(event) => { setLoginData({ ...loginData, password: event.target.value }) }}
            />
            <Link
                alignSelf="flex-start"
                style={styles.link}
            >
                Forgot Password ?
            </Link>
            <Box
                style={styles.cardsFlexRow}
                minWidth="fit-content"
                gap={3}
            >
                <Button
                    maxWidth="50%"
                    fontSize="md"
                    onClick={loginHandler}
                >
                    Sign In
                </Button>
                <Link
                    style={styles.linkComponent}
                    href="/register"
                    maxWidth="50%"
                >
                    <Button
                        fontSize="md"
                    >
                        Create Account
                    </Button>
                </Link>
            </Box>
            <Box
                style={styles.cardsFlexColumn}
                minHeight="fit-content"
            >
                <Text
                    style={styles.textTitles}
                >
                    Or Enter With :
                </Text>
                <Box
                    style={styles.cardsFlexRow}
                    gap={3}
                >
                    <Box width="50px" height="50px" background="red" />
                    <Box width="50px" height="50px" background="blue" />
                </Box>
            </Box>
        </Box>
    )
}