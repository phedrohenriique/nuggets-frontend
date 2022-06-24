import React, { useState, useRef } from "react";
import {
    Grid,
    Step,
    StepLabel,
    Stepper,
    StepContent,
    Typography,
    Snackbar,
    Alert,
    Box
} from '@mui/material'
import * as yup from "yup"
import { ptForm } from 'yup-locale-pt'
import useApi from '../../hooks/useAPI'

import { RegisterStepOne } from '../../components/Form/RegisterStepOne'
import { RegisterStepTwo } from '../../components/Form/RegisterStepTwo'
import { SuccessRegisterCard } from '../../components/Cards/SuccessRegisterCard'
import { style } from "../../config/theme/styles";

const steps = [
    {
        label: 'Cadastre-se',
        description: 'Por favor, escreva seu nome e e-mail',
    },
    {
        label: 'Escolha uma senha',
        description: 'Escolha uma senha segura',
    },
    {
        label: 'Cadastro realizado com sucesso',
        description: 'E-mail e senha cadastrados com sucesso',
    },
];

export default function Signup() {
    const [activeStep, setActiveStep] = useState(0)
    const [formInfo, setFormInfo] = useState({})
    const [requestError, setRequestError] = useState(false)
    const [requestErrorMessage, setRequestErrorMessage] = useState('')
    const firstFormRef = useRef(null)
    const secondFormRef = useRef(null)

    const { post } = useApi()

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleFirstFormSubmit = async data => {
        setFormInfo({ ...data })
        handleNext()
        // try {
        //     firstFormRef.current.setErrors({})
        //     yup.setLocale(ptForm)

        //     const schema = yup.object().shape({
        //         name: yup.string().required(),
        //         email: yup.string().email().required()
        //     })

        //     await schema.validate(data, {
        //         abortEarly: false
        //     })

        //     setFormInfo({ ...data })
        //     handleNext()

        // } catch (err) {
        //     const validationErrors = {}

        //     if (err instanceof yup.ValidationError) {
        //         err.inner.forEach(error => {
        //             validationErrors[error.path] = error.message;
        //         })

        //         firstFormRef.current.setErrors(validationErrors)
        //     }
        // }
    }

    const handleSecondSubmit = async data => {
        const { rePass, ...rest } = data
        await post('/user', { ...formInfo, ...rest })
        handleNext()
        // try {
        //     secondFormRef.current.setErrors({})
        //     yup.setLocale(ptForm)
        //     setRequestErrorMessage('')

        //     const schema = yup.object().shape({
        //         password: yup.string().required().oneOf([yup.ref('rePass')], "Senhas não combinam"),
        //         rePass: yup.string().required().oneOf([yup.ref('password')], "Senhas não combinam"),
        //     })

        //     await schema.validate(data, {
        //         abortEarly: false
        //     })
        //     const { rePass, ...rest } = data
        //     await post('/user', { ...formInfo, ...rest })
        //     handleNext()

        // } catch (err) {
        //     const validationErrors = {}

        //     if (err instanceof yup.ValidationError) {
        //         err.inner.forEach(error => {
        //             validationErrors[error.path] = error.message;
        //         })

        //         secondFormRef.current.setErrors(validationErrors)
        //     }

        //     setRequestError(true)
        //     setRequestErrorMessage(err.message)
        // }
    }

    return (
        <Grid
            container
            width="100vw"
            height="100vh">
            <Grid
                bgcolor="#F0F0F5"
                container
                item
                width="30vw"
                justifyContent="center"
                alignItems="flex-start"
                padding="10% 0px">
                <Box>
                    <Stepper
                        activeStep={activeStep}
                        orientation="vertical"
                        sx={{
                            '& .css-8t49rw-MuiStepConnector-line': {
                                borderLeft: '3px solid #0E8750',
                                minHeight: '20px',
                                marginLeft: '3px',
                            },
                        }}
                    >
                        {steps.map((step) => (
                            <Step key={step.label}
                                sx={style.stepRegister} >
                                {/*  Obrigado Jess, você salvou minha vida <3 */}
                                <StepLabel icon={"•"} /* step="true" */>
                                    {step.label}
                                </StepLabel>
                                <StepContent TransitionComponent="true" >
                                    <Typography
                                        sx={{
                                            font: "600 15px 'Nunito', sans-serif",
                                            lineHeight: '130%',
                                            color: '#3F3F55',
                                            marginLeft: '20px',
                                        }}
                                    >
                                        {step.description}
                                    </Typography>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </Grid>
            <Grid
                bgcolor="#F8F8F9"
                container
                item
                width="70vw"
                alignItems="flex-end"
                justifyContent="center">
                {
                    activeStep === 0
                        ? <RegisterStepOne
                            ref={firstFormRef}
                            onSubmit={handleFirstFormSubmit} />
                        : activeStep === 1
                            ? <RegisterStepTwo
                                ref={secondFormRef}
                                onSubmit={handleSecondSubmit} />
                            : <SuccessRegisterCard />
                }
                <Grid
                    container
                    item
                    height='15%'
                    alignItems="center"
                    gap="5px"
                    justifyContent="center">
                    {
                        <>
                            <div style={{ width: "80px", border: `3px solid ${activeStep === 0 ? "#0E8750" : "#DEDEE9"}`, borderRadius: "3px" }}></div>
                            <div style={{ width: "80px", border: `3px solid ${activeStep === 1 ? "#0E8750" : "#DEDEE9"}`, borderRadius: "3px" }}></div>
                            <div style={{ width: "80px", border: `3px solid ${activeStep === 2 ? "#0E8750" : "#DEDEE9"}`, borderRadius: "3px" }}></div>
                        </>
                    }
                </Grid>
            </Grid>
            <Snackbar
                open={requestError}
                autoHideDuration={3000}
                onClose={() => setRequestError(false)} >
                <Alert
                    severity="error"
                    color="error"  >
                    {requestErrorMessage}
                </Alert>
            </Snackbar>
        </Grid>
    )
}