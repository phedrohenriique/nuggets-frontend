import React from 'react'
import { Button, ThemeProvider, createTheme, Typography } from '@mui/material'
import { buttonTheme } from '../../config/theme/buttonTheme';

const theme = createTheme(buttonTheme)

export const BasicButtonPink = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <Button
                sx={props.sx}
                variant={'pink'}
                size='medium'
                onClick={props.onClick}
                type={props.type}
            >

                <Typography>
                {props.text}
                </Typography>
            </Button>
        </ThemeProvider>
    )
}