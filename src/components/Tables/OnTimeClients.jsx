import { Box, Chip, Grid, Link, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { style } from '../../config/theme/styles'

 const OnTimeClients = (props) => {

    const {data} = props

     function formatChipLabel(label) {
         return (label < 10) ? '0' + label.toString() : label.toString()
     }

    return (
        <Grid
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            container
            height="fit-content"
            bgcolor="#FFFFFF"
            padding='0.5% 2%'
            borderRadius="30px"
            boxShadow='0px 4px 4px rgba(172, 217, 197, 0.25);'
        >

            <Grid
                width="100%"
                display='flex'
                paddingTop="5px"
                flexDirection="row"
                justifyContent='space-between'
                alignItems='baseline'
                borderBottom='1px solid #EFF0F6'
            >
                <Box
                    display='flex'
                    gap='12px'
                    marginBottom='17px'
                >
                    {
                        props.icon
                    }
                    <Typography
                        variant={'h5'}
                        sx={style.summaryTableTitle}
                        fontSize='1.1rem'
                    >
                        {props.label}
                    </Typography>
                </Box>
                <Chip
                    sx={{
                        backgroundColor: "#eef6f6",
                        color: `${props.status === "em dia" ? "#1fa7af" : "#971D1D"}`,
                        fontWeight: "bold",
                        padding: "0px 5px",
                        fontSize: '1rem'
                    }}
                    label={formatChipLabel(data.length)}
                />

            </Grid>

            <Box width="100%">
                <Table sx={{ width: "100%" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 700 }}>Cliente</TableCell>
                            <TableCell size='small' align="right" sx={{ fontWeight: 700 }}>ID do Clie.</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 700 }}>CPF</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={style.tableContent}>
                                    {row.name}
                                </TableCell>
                                <TableCell size='small' align="right" sx={style.tableContent}>
                                    <Typography noWrap width='130px'>{row.id}</Typography>
                                </TableCell>
                                <TableCell align="right" sx={style.tableContent}>{row.cpf}</TableCell>

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
                    <p style={{ marginTop: '17px' }}>Ver todos</p>
                </Link>


            </Box>



        </Grid>
    )
}
export default OnTimeClients