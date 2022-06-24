import { Grid, Slide } from "@mui/material"
import { forwardRef, useRef, useState } from "react"
import { MdPeopleOutline } from 'react-icons/md'
import * as yup from 'yup'
import { ptForm } from 'yup-locale-pt'
import useAPI from "../../hooks/useAPI"
import useLocalStorage from "../../hooks/useLocalStorage"
import { BasicButtonLight } from '../BasicButton/BasicButtonLight'
import { BasicButtonPink } from '../BasicButton/BasicButtonPink'
import { GenericForm } from "../Form/GenericForm"
import InputComponent from "../InputComponent/InputComponent"
import Modal from './Modal'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />
})

export default function ClientRegisterModal(props) {
    const formRef = useRef(null)
    const { getItem } = useLocalStorage()
    const { post } = useAPI()

    async function handleRegisterClient(data) {
        //console.log(data)

        try {
            formRef.current.setErrors({})
            yup.setLocale(ptForm)

            const schema = yup.object().shape({
                name: yup.string().required(),
                email: yup.string().email().required(),
                cpf: yup.string().required(),
                phone: yup.string().required(),
                address: yup.string(),
                complement: yup.string(),
                cep: yup.string(),
                district: yup.string(),
                city: yup.string(),
                state: yup.string()
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            await post('https://charges-be.herokuapp.com/customer', data, getItem('token'))
            props.closeModal()

            // implement closing logic after request is done
        } catch (err) {
            const validationErrors = {}

            if (err instanceof yup.ValidationError) {
                err.inner.forEach(error => {
                    validationErrors[error.path] = error.message
                })

                formRef.current.setErrors(validationErrors)
            }
        }
    }
    return (
        <>
            <Modal
                open={props.open}
                onClose={props.onClose}
                iconimage={<MdPeopleOutline style={{ width: '32px', height: '32px' }} />}
                title='Cadastro do Cliente'
                TransitionComponent={Transition}
            >
                <GenericForm
                    ref={formRef}
                    onSubmit={handleRegisterClient}
                >
                    <Grid container direction='column' gap='5px'>
                        <Grid item xs>
                            <InputComponent
                                id='name'
                                name='Nome*'
                                type='text'
                                placeholder='Digite o nome'
                            />
                        </Grid>
                        <Grid item xs>
                            <InputComponent
                                id='email'
                                name='E-mail*'
                                type='email'
                                placeholder='Digite o e-mail'
                            />
                        </Grid>
                        <Grid container gap={3}>
                            <Grid item xs>
                                <InputComponent
                                    id='cpf'
                                    name='CPF*'
                                    type='text'
                                    placeholder='Digite o CPF'
                                />
                            </Grid>
                            <Grid item xs>
                                <InputComponent
                                    id='phone'
                                    name='Telefone*'
                                    type='text'
                                    placeholder='Digite o telefone'
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs>
                            <InputComponent
                                id='address'
                                name='Endereço'
                                type='text'
                                placeholder='Digite o endereço'
                            />
                        </Grid>
                        <Grid item xs>
                            <InputComponent
                                id='complement'
                                name='Complemento'
                                type='text'
                                placeholder='Digite o complemento'
                            />
                        </Grid>
                        <Grid container gap={3}>
                            <Grid item xs>
                                <InputComponent
                                    id='cep'
                                    name='CEP'
                                    type='text'
                                    placeholder='Digite o CEP'
                                />
                            </Grid>
                            <Grid item xs>
                                <InputComponent
                                    id='district'
                                    name='Bairro'
                                    type='text'
                                    placeholder='Digite o bairro'
                                />
                            </Grid>
                        </Grid>
                        <Grid container gap={3}>
                            <Grid item xs={7}>
                                <InputComponent
                                    id='city'
                                    name='Cidade'
                                    type='text'
                                    placeholder='Digite a cidade'
                                />
                            </Grid>
                            <Grid item xs>
                                <InputComponent
                                    id='state'
                                    name='UF'
                                    type='text'
                                    placeholder='Digite a UF'
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justifyContent='center'
                            gap={3}
                            width='100%'
                            paddingTop='30px'
                        >
                            <BasicButtonLight
                                onClick={props.onClose}
                                sx={{ height: '30px', width: '47.5%' }}
                                text='Cancelar'
                            />
                            <BasicButtonPink
                                sx={{ height: '30px', width: '47.5%' }}
                                text='Aplicar'
                                type='submit'
                            />
                        </Grid>
                    </Grid>
                </GenericForm>
            </Modal>
        </>
    )
}