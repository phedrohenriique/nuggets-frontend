import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { FiUsers, FiEdit3 } from "react-icons/fi"

import { BasicButtonPink } from "../../components/BasicButton/BasicButtonPink"
import { BillsList } from "../../components/User/BillsList"


const gridSx = {
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "50px 1fr 1fr",
    padding: "1rem 2rem",
    gap: "5px"
  },
  clientDetailGrid: {
    display: "grid",
    gridTemplateRows: "40px 1fr 1fr"
  }
}
const font = {
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    color: "#3F3F55"
  },
  text: {
    fontFamily: "Nunito",
    color: "#3F3F55"
  }
}

export default function ClientDetails(props) {


  return (

    <Grid
      container
      flexGrow={1}
      sx={gridSx.mainGrid}
    >

      <Grid
        container
        gap="1rem"
      >
        <FiUsers style={{ width: 30, height: 30, color: "#3F3F55", strokeWidth: 1.5 }} />
        <Typography variant="h5" sx={{ fontWeight: "bold" }} color="#3F3F55">
          Sara Lage Silva
        </Typography>
      </Grid>
      <ClientDetailGrid />
      <Grid
        container
        borderRadius="1rem"
        bgcolor="white"
        padding=".8rem 1.8rem"
      >
        <Grid
          container
          xs

          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              color: "#3F3F55"
            }}
          >Detalhes do cliente</Typography>
          <BasicButtonPink sx={{ padding: "5px 40px", borderRadius: "10px", width: "220px" }} text="+ Nova Cobrança" />

            
            <Grid
                container
                gap="1rem"
            >
                <FiUsers style={{ width: 30, height: 30, color: "#3F3F55", strokeWidth:  1.5 }} />
                <Typography variant="h5" sx={{fontWeight: "bold"}} color="#3F3F55">
                    Sara Lage Silva
                </Typography>
            </Grid>
            <ClientDetailGrid />
            <Grid
                container
                borderRadius="1rem"
                bgcolor="white"
                padding=".8rem 1.8rem"
            >
             <Grid
                  container
                  xs
                  
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "#F8F8F9"
                     
                    }}
                  >Detalhes do cliente</Typography>
                  <BasicButtonPink sx={{gap:16, padding:"4px 56px", borderRadius: "10px", width: "267px",height: "33px"}} text="+ Nova Cobrança" />
                  
                </Grid>
              <Grid container>
              <BillsList />
              </Grid>
            </Grid>
        </Grid>
        <Grid container>
          <BillsList />
        </Grid>
      </Grid>
    </Grid>

  )

}


function ClientDetailGrid(props) {
  return (
    <Grid
      container
      borderRadius="1rem"
      bgcolor="white"
      padding=".8rem 1.8rem"

      sx={gridSx.clientDetailGrid}
    >
      <Grid
        container
        xs

        alignItems="center"
        justifyContent="space-between"
      >
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "#3F3F55"
          }}
        >Detalhes do cliente</Typography>
        <Button style={{ backgroundColor: "#F8F8F9", textTransform: "none", width: "220px", border: "1px solid #DEDEE9", borderRadius: "10px", color: "#0E8750", padding: "5px 40px" }}> <FiEdit3 style={{ marginRight: "5px" }} /> Editar Cliente</Button>

      </Grid>
      <Grid
        container
        xs
        fontFamily="Nunito"
      >
        <Grid item xs={3}>{/* email */}
          <Typography
            sx={font.title}
          >Email:</Typography>
          <Typography
            sx={font.text}
          >sarasilva@gmail.com</Typography>
        </Grid>

        <Grid item xs={2}>{/*telefone */}
          <Typography
            sx={font.title}
          >Telefone:</Typography>
          <Typography
            sx={font.text}
          >71 9 9462 8654</Typography>
        </Grid>

        <Grid item xs> {/*cpf*/}
          <Typography
            sx={font.title}
          >CPF:</Typography>
          <Typography
            sx={font.text}
          >054 365 255 87</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        xs

      >

        <Grid item xs={3}>
          <Typography sx={font.title} >Endereço:</Typography>
          <Typography sx={font.text}>Rua das Cornélias; nº 512</Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography sx={font.title} >Bairro:</Typography>
          <Typography sx={font.text}>Oliveiras</Typography>
        </Grid>

        <Grid item xs>
          <Typography sx={font.title} >Complemento:</Typography>
          <Typography sx={font.text}>Apt: 501</Typography>
        </Grid>

        <Grid item xs>
          <Typography sx={font.title} >CEP:</Typography>
          <Typography sx={font.text}>031 654 524 04</Typography>
        </Grid>

        <Grid item xs={2}>
          <Typography sx={font.title} >Cidade:</Typography>
          <Typography sx={font.text}>Salvador</Typography>
        </Grid>

        <Grid item xs={1}>
          <Typography sx={font.title} >UF:</Typography>
          <Typography sx={font.text}>BA</Typography>
        </Grid>

      </Grid>
    </Grid>
  )
}