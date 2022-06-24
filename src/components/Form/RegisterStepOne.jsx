import { Box } from '@mui/system'
import React, { useRef } from 'react'
import { GenericForm } from './GenericForm'
import InputComponent from '../InputComponent/InputComponent'
import { BasicButtonPink } from '../BasicButton/BasicButtonPink'
import { style } from '../../config/theme/styles'
import { Link, Typography } from '@mui/material'

export const RegisterStepOne = (props) => {
   
    const submitHandler = (data) => {
        console.log(data)
    }

    return (
        <Box
            
            padding={2}
            borderRadius={'10px'}
            width={'400px'}
            height={'400px'}
            boxSizing={'medium'}
        >
            <GenericForm
                onSubmit={props.onSubmit}
                ref={props.formRef}
                width={'100%'}
                height={'100%'}
                display={'flex'}
                flexDirection={'column'}
            >
                <Typography
                    variant={'h6'}
                    fontWeight="bold"
                    sx={style.textTitle} >
                    Adicione seus dados
                </Typography>
                <InputComponent
                    id="name"
                    name={'Nome *'}
                    placeholder={'Digite seu nome'}
                />
                <InputComponent
                    id="email"
                    name={'E-mail *'}
                    placeholder={'Digite seu email'}
                />
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={3}
                >
                    <BasicButtonPink sx={style.buttonLogin} type="submit" text={'Continuar'} />
                    <Box display="flex" gap={0.4}>
                        <Typography sx={style.textLogin}>Já possui uma conta? Faça seu </Typography>
                        <Link href="/login" underline="hover" sx={style.linkLogin}>Login</Link>
                    </Box>
                </Box>
            </GenericForm>
        </Box>
    )
}