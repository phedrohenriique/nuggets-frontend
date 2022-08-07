import React from 'react'
import {
    Box,
    Text,
    Button,
    Link,
    FormControl,
    InputGroup,
    InputRightAddon
} from '@chakra-ui/react'
import { request } from '../../hooks/apis'
import { InputBasic } from '../Inputs/InputBasic'
import { styles } from '../../config/styles'
import { useNavigate, useParams } from 'react-router-dom'
import { storage } from '../../hooks/storage'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export const CardLogin = () => {
    const [loginData, setLoginData] = React.useState({})
    const [loginError, setLoginError] = React.useState(false)
    const [show, setShow] = React.useState(false)
    // eslint-disable-next-line
    //const parameters = useParams()
    const navigate = useNavigate()

    const loginHandler = async () => {
        try {
            const responseLogin = await request.post("/users/login", loginData)
            setLoginError(false)
            const { token, message } = responseLogin.data
            console.log(message)
            if (token === null) {
                return
            }
            storage.storeData("token", token)
            console.log(storage.getData("token"))
            const responseLoginData = await request.get("/users/login/user", {
                headers: { "Authorization": `Bearer ${storage.getData("token")}` }
            })
            storage.storeData("user", responseLoginData.data.user)
            navigate(`/users/login/user?users_name=${storage.getData("user").name}`)
        }
        catch (error) {
            console.log(error)
            setLoginError(true)
            return
        }
    }

    React.useEffect(() => {
        document.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                console.log("Enter pressed")
                loginHandler()
            }
        })
    }, [])

    return (
        <FormControl
            style={styles.cardsFlexColumn}
            background="white"
            maxWidth="30vw"
            minHeight="fit-content"
            borderRadius={15}
            padding={3}
            gap={3}
        >
            <Text
                style={styles.textTitles}
                fontSize="2xl"
            >
                Login
            </Text>
            <InputBasic
                id="1"
                placeholder="user@mail.com"
                label="Email"
                type="text"
                onChange={(event) => { setLoginData({ ...loginData, email: event.target.value }) }}
            />
            <InputGroup>
                <InputBasic
                    id="2"
                    placeholder="123abc"
                    label="Password"
                    type={show ? "text" : "password"}
                    onChange={(event) => { setLoginData({ ...loginData, password: event.target.value }) }}
                />
                <InputRightAddon alignSelf="flex-end" children={
                    <Button onClick={() => { setShow(!show) }}>
                        {
                            show
                                ? <FiEye />
                                : <FiEyeOff />
                        }
                    </Button>
                } />
            </InputGroup>
            <Link
                alignSelf="flex-start"
                style={styles.link}
            >
                Forgot Password ?
            </Link>
            <Box
                style={styles.cardsFlexRow}
                width="fit-content"
                gap={3}
            >
                <Button
                    fontSize="md"
                    onClick={loginHandler}
                >
                    Sign In
                </Button>
                <Link
                    style={styles.linkComponent}
                    href="/register"
                >
                    <Button
                        fontSize="md"
                    >
                        Create Account
                    </Button>
                </Link>
            </Box>
            {
                loginError
                    ? <Text color="#C21F1F" styles={styles.errorText}> Invalid Login, Try again.</Text>
                    : ''
            }
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
        </FormControl>
    )
}