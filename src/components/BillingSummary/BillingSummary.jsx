import React, {useCallback} from "react";
import { Box, Grid, Typography } from "@mui/material";
import { style } from "../../config/theme/styles";
import imagemPagamento from '../../assets/images/demostrative-paid.svg';

export const BillingSummary = (props) => {

    const centToBRL = useCallback((cents) =>{
      const valueInBRL = (Number(cents) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      return valueInBRL
    },[])

  return (
  <Grid
    display="flex"
    flexGrow="1"
    container
    padding="20px 40px"
    borderRadius="20px"
    {...props}
   
   
    sx={{
        position:"relative",
    }}


  >
      <img 
      src={props.img}
      style={{
          position:"absolute",
          top: 29,
          width: 35,

       
    }}
      />
      <Box
      flexGrow="1"
      textAlign="center"
      >
      <Typography>
          {props.label}
      </Typography>
      <Typography
      fontSize="1.5rem"
      >
          {centToBRL(props.value)} 
      </Typography>
      </Box>
  </Grid>)
};
