import React from 'react'
import { Button } from '@chakra-ui/react'

export const ButtonBasic = (props) => {
  return (
    <Button
      ref={props.ref}
    >
      {props.children}
    </Button>
  )
}