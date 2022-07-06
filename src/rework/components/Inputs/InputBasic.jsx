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
        {...props}
      />
    </Box>
  )
}