import React, {useEffect, forwardRef} from 'react'
import { Box } from '@mui/system'
import { Form } from "@unform/web"

export const GenericForm = forwardRef((props, ref) => {
    return (
        <>
            <Form ref={ref} onSubmit={props.onSubmit} {...props}>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    flexWrap
                    gap={3}
                >
                    {props.children}
                </Box>
            </Form>
        </>
    )
})