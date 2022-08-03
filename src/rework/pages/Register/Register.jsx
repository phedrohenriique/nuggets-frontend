import React from 'react'
import {
    Box,
    Button,
    Link,
    Text
} from '@chakra-ui/react'
import { StepBasic } from '../../components/Steps/StepBasic'
import { CardRegister } from '../../components/Cards/CardRegister'
import { CardPassword } from '../../components/Cards/CardPassword'
import { CardSuccess } from '../../components/Cards/CardSuccess'
import { styles } from '../../config/styles'
import { useSteps } from 'chakra-ui-steps'
import { request } from '../../hooks/apis'

export const Register = (props) => {

    const { nextStep, prevStep, setStep, activeStep } = useSteps({ initialStep: 0 })
    const [registerData, setRegisterData] = React.useState({})
    const [registerPassword, setRegisterPassword] = React.useState('')
    const [formError, setFormError] = React.useState(false)

    const dataHandler = () => {
        const data = { ...registerData, password: registerPassword.password }
        return data
    }

    const steps = [
        {
            label: "Register",
            key: 1
        },
        {
            label: "Pssword",
            key: 2
        },
        {
            label: "Complete",
            key: 3
        }
    ]

    const activeStepHandler = (activeStep) => {
        if (activeStep < 0) {
            setStep(0)
            return activeStep
        }
        if (activeStep > steps.length) {
            setStep(steps.length)
            return activeStep
        }


        return activeStep
    }

    ////////////////// DEBUG //////////////////////

    React.useEffect(() => {
    }, [activeStep])

    return (
        <Box style={styles.pages}>
            <Box
                style={styles.cardsFlexColumn}
                background="white"
                width="40vw"
                minHeight="fit-content"
                padding={3}
                borderRadius={15}
            >
                <StepBasic
                    activeStep={activeStepHandler(activeStep)}
                    stepList={steps}
                />
                {activeStep === 0
                    ? <CardRegister setData={setRegisterData} />
                    : activeStep === 1
                        ? <CardPassword setData={setRegisterPassword} />
                        : <CardSuccess />
                }
                <Box
                    style={styles.cardsFlexRow}
                    gap={3}
                    width="50%"
                >
                    {activeStep === 0
                        ? <>
                            <Link href="/" style={styles.linkComponent}>
                                <Button minWidth="50%">
                                    Already Registered !
                                </Button>
                            </Link>
                            <Button minWidth="50%" onClick={() => {
                                nextStep(1)
                            }}>
                                Confirm
                            </Button>
                        </>
                        : activeStep === 1
                            ? <Box
                                display="flex"
                                flexDirection="column"
                            >{
                                    formError
                                        ? <Text style={styles.errorText}>
                                            There was an error, review your info please !
                                        </Text>
                                        : ''
                                }
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    gap={2}
                                >
                                    <Button width="50%" onClick={() => {
                                        setFormError(false)
                                        prevStep(1)
                                    }}>
                                        Previous
                                    </Button>
                                    <Button width="50%" onClick={async () => {
                                        console.log(registerPassword)
                                        if (registerPassword.confirmedPassword === true) {
                                            try {
                                                await request.post("/users", JSON.stringify(dataHandler()))
                                                setStep(3);
                                            }
                                            catch (error) {
                                                console.log("Error, invalid inputs : ", error)
                                                setFormError(true)
                                                return
                                            }
                                        }
                                        else {
                                            console.log("Error, password don't match, register")
                                            setFormError(true)
                                            return
                                        }
                                    }}>
                                        Submit
                                    </Button>
                                </Box>

                            </Box>
                            : <Link
                                href="/"
                                style={styles.linkComponent}
                            >
                                <Button>
                                    Back to Login
                                </Button>
                            </Link>
                    }
                </Box>
            </Box>
        </Box >
    )
}