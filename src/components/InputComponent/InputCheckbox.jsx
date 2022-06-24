import React, { useRef, useEffect } from "react";
import { Checkbox, FormControl, FormHelperText, Input } from "@mui/material";
import { useField } from "@unform/core"
import { style } from '../../config/theme/styles'

export default function InputCheckbox(props) {

    const inputRef = useRef(null);
    const { fieldName, defaultValue = "", registerField, error } = useField(props.id);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "checkbox"
        });
    }, [fieldName, registerField]);
    
    return (
        <>
            {props.label && <label htmlFor={fieldName}>{props.label}</label>}

            <Checkbox
                ref={inputRef}
                id={fieldName}
                defaultValue={defaultValue}
                type='checkbox'
                {...props}
            />

            {error && <span style={{ color: "#f00" }}>{error}</span>}
        </>
    );
}
