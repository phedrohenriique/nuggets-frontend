import React from 'react'
import { Button, ThemeProvider, createTheme } from '@mui/material'
import { buttonTheme } from '../../config/theme/buttonTheme';

const theme = createTheme(buttonTheme)

export const BasicButtonWhite = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <Button
                sx={props.sx}
                variant={'white'}
                size='medium'
                onClick={props.onClick}>
                {props.text}
            </Button>
        </ThemeProvider>
    )
}