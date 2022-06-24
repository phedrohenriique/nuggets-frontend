import React, {useEffect} from "react";
import { Grid, Typography } from "@mui/material"
import {useNavigate} from 'react-router-dom'
import useLocalStorage from '../../hooks/useLocalStorage'

import { ModalFormLogin } from "../../components/Form/ModalFormLogin";
import {style} from '../../config/theme/styles'


export default function Login() {
    const {getItem} = useLocalStorage()
    const navigate = useNavigate()
    useEffect( () => {
        const hasToken = getItem('token')
        if (hasToken) {
            navigate('/')
        }
    }, [])
    return(
        <Grid bgcolor="#F8F8F9" container width="100vw" height="100vh">
            <Grid container height="100%" width="30%" sx={style.leftContainer} justifyContent="center" padding="10% 0px">
                <Typography variant="h6" sx={style.leftContainerText}>
                    Gerencie todos os pagamentos da sua empresa em um só lugar.
                </Typography>
            </Grid>
            <Grid container height="100%" width="70%" alignItems="center" justifyContent="center">
                <ModalFormLogin />
            </Grid>
        </Grid>
    )
}