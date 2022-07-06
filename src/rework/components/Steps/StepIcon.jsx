import React from 'react'
import { Box } from '@chakra-ui/react'
import { HiCheckCircle } from 'react-icons/hi'

export const StepIcon = (props) => {

    const stepChecked = props.stepChecked


    return (
        <>
            <Box
                width="50px"
                height="50px"
                background="white"
                border="2px solid green"
                borderRadius="50%"
                alignItems="center"
                justifyContent="center"
                display="flex"
            >
                {stepChecked
                    ? <HiCheckCircle
                        fill="green"
                        size="120px"
                    />
                    : props.stepName
                }
            </Box>
        </>
    )
}