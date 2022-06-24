import React, { useRef, useEffect } from "react";
import { FormControl, FormHelperText, Input } from "@mui/material";
import { useField } from "@unform/core"
import { style } from '../../config/theme/styles'

export default function InputComponent(props) {

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
      style={{ display: "flex", flex: 1, position: "relative" }}>
      <FormHelperText
        style={
          error
            ? { color: 'red', marginBottom: '4px' }
            : { color: 'black', marginBottom: '4px' }
        }
        sx={style.customLabel}
        variant="standard"
      >
        {props.name}
      </FormHelperText>
      {props.showLink}
      <Input
        inputRef={inputRef}
        defaultValue={defaultValue}
        sx={style.customInput}
        fullWidth
        disableUnderline
        autoComplete={props.autoComplete}
        value={props.value}
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
