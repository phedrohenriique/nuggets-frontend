import React, { useRef, useEffect } from "react";
import { FormControl, FormHelperText, Input } from "@mui/material";
import { useField } from "@unform/core"
import { style } from '../../config/theme/styles'

export default function InputDescription(props) {

    const inputRef = useRef(null)
    const { fieldName, defaultValue, registerField, error } = useField(props.id)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    }, [fieldName, registerField])
    return (
        <FormControl
            error={error !== null}
            style={{ display: "flex", flex: 1 }}>
            <FormHelperText style={
                error
                    ? { color: 'red', marginBottom: '4px' }
                    : { color: 'black', marginBottom: '4px' }
            }>
                {props.name}
            </FormHelperText>
            <Input
                inputRef={inputRef}
                defaultValue={defaultValue}
                sx={style.descriptionInput}
                multiline
                minRows={4}
                maxRows={4}
                fullWidth
                disableUnderline
                {...props} />
            {error &&
                <FormHelperText
                    style={{ color: 'red' }}
                    variant="standard">
                    {error}
                </FormHelperText>}
        </FormControl>
    )
}