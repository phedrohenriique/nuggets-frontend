import React from 'react'
import { Button, ThemeProvider, createTheme } from '@mui/material'
import { buttonTheme } from '../../config/theme/buttonTheme';

const theme = createTheme(buttonTheme)

export const BasicButtonLight = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <Button
                sx={props.sx}
                variant={'light'}
                /* size='medium' */
                onClick={props.onClick}
            >
                {props.text}
            </Button>
        </ThemeProvider>
    )
}