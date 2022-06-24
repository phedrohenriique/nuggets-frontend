import React from 'react'
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Link, Grid} from '@mui/material'
import { RiUserFollowLine as UserCheck } from 'react-icons/ri'
import { RiUserUnfollowLine as UserCross } from 'react-icons/ri'
import { style } from '../../config/theme/styles'
import imageBilling from '../../assets/images/billingList.svg';


function createData(
    client,
    date,
    value
) {
    return { client, date, value };
}

const rows = [
    
    createData('Cameron Williamson', '03/02/2021', 'R$500,00'),
    createData('Savannah Nguyen', '04/03/2021', 'R$500,00'),
    createData('Darlene Robertson', '21/04/2021', 'R$500,00'),
    createData('Marvin McKinney', '08/05/2021', 'R$500,00'),
];

export const OverdueClients = (props) => {

    return (
        <Grid
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            width='40vw'
            height='fit-content'
           
            padding='0.5% 2%'
            borderRadius="30px"
            boxShadow='0px 4px 4px rgba(172, 217, 197, 1);'
        >

            <Grid
                width='500px'
                display='flex'
                justifyContent='center'
                alignItems='center'
                gap='188px'
                borderBottom='1px solid #EFF0F6
                '

            >
                <Grid
                    display='flex'
                    gap='12px'
                    marginBottom='17px'
                >
                    <UserCross
                        style={{ width: '20px', height: "20px" }}
                        color='#971D1D' />

                    <Typography
                        variant={'h5'}
                        sx={style.textTitle}
                        fontSize='18px'
                    >
                        Clientes Inadimplentes
                    </Typography>
                </Grid>

                <Grid
                    display='flex'
                    flexDirection='row'
                    justifyContent='center'
                    alignItems='center'
                    padding='0px 15px'
                    backgroundColor='#FFEFEF'
                    borderRadius='10px'
                    color='#971D1D'
                    fontWeight='bold'
                    marginBottom='17px'
                    fontSize='16px'
                >
                    08
                </Grid>

            </Grid>

            <Box>
                <Table sx={{ width: 500 }}>
                    <TableHead
                    style="backgroundColor: transparent !important"
                    
                    >
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700 }}>Cliente</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 700 }}>Data de venc.</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 700 }}>Valor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.client}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={style.tableContent}>
                                    {row.client}
                                </TableCell>
                                <TableCell align="right" sx={style.tableContent}>{row.date}</TableCell>
                                <TableCell align="right" sx={style.tableContent}>{row.value}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>


                <Link 
                display='flex'
                justifyContent='center'
                alignItems='center'
                color='#DA0175'
                borderTop='1px solid #EFF0F6'
                fontFamily='Nunito, sans-serif'
                fontSize='18px'
                >
                <p marginTop='17px'>Ver todos</p>
                </Link>


            </Box>



            {/* <Box>
            <UserCheck
                style={{ width: '20px', height: "20px" }}
                color='#1FA7AF'/>
            </Box> */}


        </Grid>
    )
}