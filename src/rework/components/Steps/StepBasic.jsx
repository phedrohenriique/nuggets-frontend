import React from 'react'
import { StepIcon } from './StepIcon'

export const StepBasic = (props) => {

    return (
        <>
            <div>StepBasic</div>
            <StepIcon 
            stepName={1} 
            stepChecked={true}
            />
        </>
    )
}