import { Grid, Slide, Typography, FormControlLabel, Checkbox, Box } from "@mui/material"
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react"
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
import InputDescription from "../InputComponent/InputDescription"

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />
})

export default function BillRegisterModal(props) {
    const formRef = useRef(null)

    const { getItem } = useLocalStorage()
    const { post } = useAPI()

    async function handleRegisterClient(data) {
        data = {
            ...data,
            is_paid: props.isPaid,
            customer_id: props.customerId
        }
        //console.log('post data payload : ', data)
        await post(`/charge`, data, getItem('token'))
        props.closeModal()
    }


    return (
        <>
            <Modal
                open={props.open}
                onClose={props.onClose}
                iconimage={<MdPeopleOutline style={{ width: '32px', height: '32px' }} />}
                title='Criar Cobrança'
                TransitionComponent={Transition}
            >
                <GenericForm
                    formRef={formRef}
                    onSubmit={handleRegisterClient}
                >
                    <Grid container direction='column' gap='5px'>
                        <Grid item xs>
                            <InputComponent
                                id='customer_name'
                                name='Nome*'
                                type='text'
                                placeholder='Digite o nome'
                                defaultValue={props.name}
                            />
                        </Grid>
                        <Grid item xs>
                            <InputDescription
                                id="description"
                                name={'Descrição *'}
                                placeholder={'Digite a descrição'}
                                defaultValue={'---'}
                            />
                        </Grid>
                        <Grid container gap={3}>
                            <Grid item xs>
                                <InputComponent
                                    id='deadline'
                                    name='Vencimento*'
                                    type='text'
                                    placeholder='Data de Vencimento'
                                    defaultValue={'01/01/2021'}
                                />
                            </Grid>
                            <Grid item xs>
                                <InputComponent
                                    id='value'
                                    name='Valor*'
                                    type='text'
                                    placeholder='Valor'
                                    defaultValue={'1000'}
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


