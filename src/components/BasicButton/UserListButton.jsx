import React from 'react'
import { Button, ThemeProvider } from '@mui/material'
import { buttonTheme } from '../../config/theme/buttonTheme'
import { createTheme } from '@material-ui/core'

const theme = createTheme(buttonTheme)

export const UserListButton = (props) => {
    
    return (
        <ThemeProvider theme={theme}>
            <Button
                sx={props.sx}
                onClick={props.onClick}
                startIcon={props.startIcon}
                endIcon={props.endIcon}
                variant={'userInterface'}
            >
                {props.text}
            </Button>
        </ThemeProvider>
    )
}