import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { StepBasic } from '../../components/Steps/StepBasic'
import { CardRegister } from '../../components/Cards/CardRegister'
import { CardPassword } from '../../components/Cards/CardPassword'
import { CardSuccess } from '../../components/Cards/CardSuccess'
import { styles } from '../../config/styles'
import { useSteps } from 'chakra-ui-steps'

export const Register = (props) => {

    const { nextStep, prevStep, setStep, activeStep } = useSteps({ initialStep: 0 })

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
        console.log("active step : ", activeStep)
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
                    ? <CardRegister />
                    : activeStep === 1
                        ? <CardPassword />
                        : <CardSuccess />
                }
                <Box
                    style={styles.cardsFlexRow}
                    gap={3}
                >
                    <Button width="50%" onClick={() => { prevStep(1) }}>
                        Previous
                    </Button>
                    <Button width="50%" onClick={() => { nextStep(1) }}>
                        Next
                    </Button>

                </Box>
            </Box>
        </Box>
    )
}