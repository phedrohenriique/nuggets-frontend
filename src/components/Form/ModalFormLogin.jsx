import { Alert, Box, IconButton, InputAdornment, Link, Snackbar, Typography } from '@mui/material'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { ptForm } from 'yup-locale-pt'
import eyeIcon from '../../assets/icons/eye.svg'
import eyeOffIcon from '../../assets/icons/eye-off.svg'
import { style } from '../../config/theme/styles'
import useApi from '../../hooks/useAPI'
import useLocalStorage from '../../hooks/useLocalStorage'
import { BasicButtonPink } from '../BasicButton/BasicButtonPink'
import InputComponent from '../InputComponent/InputComponent'
import { GenericForm } from './GenericForm'

export const ModalFormLogin = (props) => {
    const [requestError, setRequestError] = useState(false)
    const [requestErrorMessage, setRequestErrorMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()
    const { post } = useApi()
    const { setItem } = useLocalStorage()
    const formRef = useRef(null)

    function handleClickShowPassword() {
        setShowPassword(!showPassword)
    }

    const handleSubmit = async (data, { reset }) => {
        try {
            formRef.current.setErrors({})
            yup.setLocale(ptForm)

            const schema = yup.object().shape({
                email: yup.string().email().required(),
                password: yup.string().required()
            })

            await schema.validate(data, {
                abortEarly: false
            })

            const { data: response } = await post('/login', data)
            setItem('token', response.token)
            setItem('user', response.user)
            reset()
            navigate('/')

        } catch (err) {
            const validationErrors = {}

            if (err instanceof yup.ValidationError) {
                err.inner.forEach(error => {
                    validationErrors[error.path] = error.message;
                })

                formRef.current.setErrors(validationErrors)
            }
            setRequestError(true)
            setRequestErrorMessage(err.message)
        }
    }

    return (
        <Box
            sx={props.sx}
            padding={2}
            borderRadius="10px"
            width="350px"
            height="350px"
            boxSizing="medium"
        >
            <GenericForm
                onSubmit={handleSubmit}
                ref={formRef}
                width="100%"
                height="100%"
                display="flex"
                flexDirection="column"
            >
                <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={style.textTitle}
                >
                    Faça seu login!
                </Typography>
                <InputComponent
                    type="text"
                    name="E-mail"
                    id="email"
                    placeholder="Digite seu e-mail"
                />
                <InputComponent
                    name="Senha"
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                    showLink={<Link style={{ position: 'absolute', right: '0', top: '3px' }} href="#" underline="hover" sx={style.linkLogin}>Esqueceu a senha?</Link>}
                    endAdornment={
                        <InputAdornment>
                            <IconButton
                                aria-label="mostrar ou ocultar a senha"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ?
                                    <img src={eyeIcon} alt="olho aberto" style={{ width: '20px', height: '18px' }} /> :
                                    <img src={eyeOffIcon} alt="olho fechado" style={{ width: '20px', height: '18px' }} />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    gap={3}
                >
                    <BasicButtonPink sx={style.buttonLogin} type="submit" text="Entrar" />
                    <Box display="flex" gap={0.4}>
                        <Typography sx={style.textLogin}>Ainda não possui uma conta?</Typography>
                        <Link href="/signup" underline="hover" sx={style.linkLogin}>Cadastre-se</Link>
                    </Box>
                </Box>
            </GenericForm>
            <Snackbar open={requestError} autoHideDuration={3000} onClose={() => setRequestError(false)} >
                <Alert severity="error" color="error"  >{requestErrorMessage}</Alert>
            </Snackbar>
        </Box>
    )
}