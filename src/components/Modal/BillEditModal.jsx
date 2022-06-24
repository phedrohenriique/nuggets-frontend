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
import InputCheckbox from "../InputComponent/InputCheckbox"

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />
})

export default function BillEditModal(props) {
    const formRef = useRef(null)
    const checkbox = useRef()

    const { getItem } = useLocalStorage()
    const { put } = useAPI()

    async function handleRegisterClient(data) {
        const checkboxValue = checkbox.current
        data = {
            ...data,
            is_paid: checkboxValue.isChecked,
            customer_id: props.customer_id,
            name: props.name
        }
        console.log('data with paid :', data)
        await put(`/charge/${props.id}`, data, getItem('token'))
        props.closeModal()

    }


    return (
        <>
            <Modal
                open={props.open}
                onClose={props.onClose}
                iconimage={<MdPeopleOutline style={{ width: '32px', height: '32px' }} />}
                title='Edição de Cobrança'
                TransitionComponent={Transition}
            >
                <GenericForm
                    formRef={formRef}
                    onSubmit={handleRegisterClient}
                >
                    <Grid container direction='column' gap='5px'>
                        <Grid item xs>
                            <InputComponent
                                id='name'
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
                        <Grid item xs>
                            <InputComponent
                                id='is_paid'
                                name='Status*'
                                type='text'
                                placeholder='Status'
                            />
                            <CheckBoxInput ref={checkbox} />
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

const CheckBoxInput = forwardRef((props, ref) => {
    const [isChecked, setIsChecked] = useState(true)
    const [billLabel, setBillLabel] = useState('')
    const clickHandler = () => {
        setIsChecked(!isChecked)
        if (!isChecked) {
            console.log('Cobrança Paga')
            setBillLabel('Cobrança Paga')
        }
        else {
            console.log('Cobrança Pendente')
            setBillLabel('Cobrança Pendente')
        }
    }

    useImperativeHandle(ref, () => ({
        isChecked,
        billLabel
    }));

    return (
        <Box display='flex' flexDirection='column'>
            <FormControlLabel
                control={
                    <Checkbox
                        id="boxOne"
                        onClick={clickHandler}
                        checked={isChecked} />}
                label={'Cobrança Paga'} />
            <FormControlLabel
                control={
                    <Checkbox
                        id="boxTwo"
                        onClick={clickHandler}
                        checked={!isChecked} />}
                label={'Cobrança Pendente'} />
        </Box>
    )
})
