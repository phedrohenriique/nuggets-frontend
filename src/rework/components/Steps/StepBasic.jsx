import { Button, Box } from '@chakra-ui/react'
import { Step, Steps, useSteps } from 'chakra-ui-steps'
import React from 'react'

export const StepBasic = (props) => {

    const steps = [{ label: "step 1" }, { label: "step 2" }]
    const { nextStep, prevStep, reset, setStep, activeStep } = useSteps({ initialStep: 0 })

    return (
        <>
            <Box>
                <Steps orientation="vertical" activeStep={activeStep}>
                    <Step label={"label"} key={1}>
                        Phase 1
                    </Step>
                    <Step label={"label"} key={2}>
                        Phase 2
                    </Step>
                    <Step label={"label"} key={3}>
                        Final
                    </Step>
                </Steps>
            </Box>
            <Button onClick={() => { nextStep(1) }}>
                Next
            </Button>
            <Button onClick={() => { prevStep(1) }}>
                Previous
            </Button>
            <Button onClick={reset}>
                Reset
            </Button>

        </>
    )
}