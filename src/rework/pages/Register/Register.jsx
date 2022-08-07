import React from 'react'
import {
    Box,
} from '@chakra-ui/react'
import { StepBasic } from '../../components/Steps/StepBasic'
import { CardRegister } from '../../components/Cards/CardRegister'
import { CardPassword } from '../../components/Cards/CardPassword'
import { CardSuccess } from '../../components/Cards/CardSuccess'
import { styles } from '../../config/styles'
import { useSteps } from 'chakra-ui-steps'

export const Register = (props) => {

    const { nextStep, prevStep, setStep, activeStep } = useSteps({ initialStep: 0 })
    const [registerData, setRegisterData] = React.useState({})

    const steps = [
        {
            label: "Register",
            key: 1
        },
        {
            label: "Password",
            key: 2
        },
        {
            label: "Complete",
            key: 3
        }
    ]

    /////////////// ACTIVE STEP /////////////////

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
                minWidth="30vw"
                minHeight="fit-content"
                padding={3}
                borderRadius={15}
            >
                <StepBasic
                    activeStep={activeStepHandler(activeStep)}
                    stepList={steps}
                />
                {activeStep === 0
                    ? <CardRegister
                        nextStep={nextStep}
                        dataHandler={setRegisterData} />
                    : activeStep === 1
                        ? <CardPassword
                            postData={registerData}
                            prevStep={prevStep}
                            nextStep={setStep}

                        />
                        : <CardSuccess />
                }
            </Box>
        </Box >
    )
}