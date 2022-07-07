import React from 'react'
import {
  Input,
  Box,
  Text
} from '@chakra-ui/react'
import { styles } from '../../config/styles'

export const InputBasic = (props) => {

  return (
    <Box
      width="100%"
      style={styles.cardsFlexColumn}
      gap={3}
    >
      <Text
        alignSelf="flex-start"
        style={styles.textInputs}
      >
        {props.label}
      </Text>
      <Input
        _hover={{
          background: "#80808070"
        }}
        _focus={{
          background: "#80808070",
          border: "2px solid #6A609770"
        }}
        {...props}
      />
    </Box>
  )
}