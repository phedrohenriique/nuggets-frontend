import React from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { IoCheckmarkCircleOutline as CheckCircleIcon } from 'react-icons/io5'
import { BasicButtonPink } from '../BasicButton/BasicButtonPink'
import { style } from '../../config/theme/styles'

export const SuccessRegisterCard = (props) => {    
    const navigate = useNavigate()

    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            gap={4}
            width='600px' 
            height='512px'
        >
            <Box
                width="100%"
                padding="20% 0"
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                gap={2}
                bgcolor="#F0F0F5"
                borderRadius="30px"
            >
                <CheckCircleIcon
                    style={{ width: '120px', height: "120px", }}
                    color='#0E8750'
                />
                <Typography sx={style.textTitle} align='center'>
                    Cadastro realizado com sucesso!
                </Typography>
            </Box>            
                <BasicButtonPink
                    onClick={() => navigate('/login')}
                    text='Ir para Login' 
                    type='button'
                    sx={{width: '30%', textTransform: 'none', borderRadius: '10px',}}
                />            
        </Box>
    )
}