import React from 'react'
import { Input } from '@chakra-ui/react'

export const InputBasic = (props) => {
  return (
    <Input
      ref={props.ref}
    >
      {props.children}
    </Input>
  )
}