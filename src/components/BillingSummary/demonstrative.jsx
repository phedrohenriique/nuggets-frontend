import React from 'react'
import { Box, Typography } from '@mui/material'
import { style } from '../../config/theme/styles'

export const BillingSummary = (props) => {
    
    return (
        <Box className='paid'
        display="flex"
        flexDirection= "column"
        justifyContent= "space-between"
        alignItems=" flex-start"
        padding="23px 40px"
        gap= "10px"
        width="360px"
        height= "111px"
        backgroundColor=" #EEF7F7"
        
       >
        <Box className='overdue'
        display="flex"
        flexDirection= "column"
        justifyContent= "space-between"
        alignItems=" flex-start"
        padding="23px 40px"
        gap= "10px"
        width="360px"
        height= "111px"
        backgroundColor=" #FFEFEF"
        >          
       <Box className='preview'
        display="flex"
        flexDirection= "column"
        justifyContent= "space-between"
        alignItems=" flex-start"
        padding="23px 40px"
        gap= "10px"
        width="360px"
        height= "111px"
        backgroundColor="  #FCF6DC"
        ></Box>
               
                <Typography
                    sx={style.textTitle}
                    variant={'h5'}>
                    Cobranças Pagas
                    R$30.000,00
                </Typography>

                <Typography
                    sx={style.textTitle}
                    variant={'h5'}>
                    Cobranças Vencidas
                    R$7.000,00
                </Typography>

                <Typography
                    sx={style.textTitle}
                    variant={'h5'}>
                    Cobranças Previstas
                    R$10.000,00
                </Typography>
            </Box>
           
        </Box>
    )
}
