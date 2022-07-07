import { Step, Steps, useSteps } from 'chakra-ui-steps'
import React from 'react'

export const StepBasic = (props) => {

    return (
        <Steps
            colorScheme="purple"
            orientation="horizontal"
            activeStep={props.activeStep}
        >
            {props.stepList.map(({ label, key }) => {
                return (
                    <Step
                        
                        key={key} />
                )
            })}
        </Steps>
    )
}