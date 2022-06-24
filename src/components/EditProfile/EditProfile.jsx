import { Grid } from "@mui/material"
import { useRef } from "react"
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { ptForm } from 'yup-locale-pt'
import Modal from '../Modal/Modal'
import InputComponent from '../InputComponent/InputComponent'
import { GenericForm } from '../Form/GenericForm'
import { BasicButtonPink } from "../BasicButton/BasicButtonPink";
import { style } from '../../config/theme/styles'
import useAPI from '../../hooks/useAPI'
import useLocalStorage from "../../hooks/useLocalStorage"

export default function EditProfile(props) {
    const formRef = useRef(null)
    const {getItem, removeItem, setItem} = useLocalStorage()
    const {put} = useAPI()
    const navigate = useNavigate()

    const handleEditeProfile = async (data, { reset }) => {
        try {
            formRef.current.setErrors({})
            yup.setLocale(ptForm)

            const schema = yup.object().shape({
                name: yup.string().required(),
                email: yup.string().email().required(),
                cpf: yup.string(),
                phone: yup.string(),
                password: yup.string().required().oneOf([yup.ref('rePass')], "Senhas não combinam"),
                rePass: yup.string().required().oneOf([yup.ref('password')], "Senhas não combinam"),
            })

            await schema.validate(data, {
                abortEarly: false
            })

            await put('user', data, getItem('token'))
            const {email, name} = data
            removeItem('user')
            setItem('user', {email, name})
            navigate('/login')
        } catch (err) {
            const validationErrors = {}

            if (err instanceof yup.ValidationError) {
                err.inner.forEach(error => {
                    validationErrors[error.path] = error.message;
                })

                formRef.current.setErrors(validationErrors)
            }
        }
    }
    return (
        <Modal
        open={props.isOpen}
        onClose={props.onClose}
        title="Editar Perfil"
        >
            <GenericForm 
                ref={formRef} 
                onSubmit={handleEditeProfile}
                initialData={getItem('user')}
            >
                <Grid container spacing="5" padding="0px 10px" >
                    <Grid container item justifyContent="center"  >
                        <InputComponent
                            id="name"
                            type="text"
                            name="Nome *"
                            placeholder="Digite seu nome"
                        />
                    </Grid>
                    <Grid container item justifyContent="center">
                        <InputComponent
                            id="email" 
                            type="text"
                            name="Email *"
                            placeholder="Digite seu e-mail"
                        />
                    </Grid>
                    <Grid container item spacing="5" gap="40px" justifyContent="center">
                        <InputComponent
                            id="cpf" 
                            type="text"
                            name="CPF"
                            placeholder="Digite seu CPF"
                        />
                        <InputComponent
                            id="phone" 
                            type="text"
                            name="Telefone"
                            placeholder="Digite seu telefone"
                        />
                    </Grid>
                    <Grid container item justifyContent="center">
                        <InputComponent
                            id="password"
                            type="password"
                            name="Senha *"
                            placeholder="******"
                        />
                    </Grid>
                    <Grid container item justifyContent="center">
                        <InputComponent
                            id="rePass"
                            type="password"
                            name="Confirmar Senha *"
                            placeholder="******"
                        />
                    </Grid>
                    <Grid container item justifyContent="center">
                        <BasicButtonPink
                            sx={style.buttonLogin}
                            type="submit"
                            text="Enviar"
                        />
                    </Grid>
                </Grid>
            </GenericForm>
        </Modal>
    )
}