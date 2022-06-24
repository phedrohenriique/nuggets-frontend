import { Box, Chip, Grid, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { style } from '../../config/theme/styles'
import BillsTableRows from './BillsTableRows'

export default function BillsTable(props) {

    const [chipColor, setChipColor] = useState(null)

    function handleChipColor() {
        if (props.tableStatus === 'paid') {
            return { backgroundColor: '#EEF6F6', color: '#1FA7AF' }
        }
        if (props.tableStatus === 'pendent') {
            return { backgroundColor: '#FCF6DC', color: '#C5A605' }
        }
        if (props.tableStatus === 'overdue') {
            return { backgroundColor: '#FFEFEF', color: '#971D1D' }
        }
    }

    function formatChipLabel(label) {
        return (label < 10) ? '0' + label.toString() : label.toString()
    }

    function formatValue(value) {
        const centsToBRL = Number(value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        return centsToBRL
    }

    useEffect(() => {
        setChipColor(handleChipColor)
    }, [])    
    return (
        <Grid minWidth={360} sx={style.summaryTableContainer}>
            <Box display='flex' justifyContent='space-between' alignItems='center' padding='5% 5% 5% 15%'>
                <Typography sx={style.summaryTableTitle}>{props.tableName}</Typography>
                <Chip label={formatChipLabel(props.data.length)} style={chipColor} sx={style.summaryTableChip} size='small'></Chip>
            </Box>
            <Box>                
                <TableContainer>
                    <Table sx={{borderColor: '#eff0f6', borderBottom: '1px solid #eff0f6'}}>
                        <TableHead sx={{borderTop: '1px solid #eff0f6'}}>
                            <TableRow>
                                <TableCell sx={style.summaryTableLabel}>Cliente</TableCell>
                                <TableCell sx={style.summaryTableLabel}>ID da cob.</TableCell>
                                <TableCell align='right' sx={style.summaryTableLabel}>Valor</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>                        
                            {       
                                props.data.map((row) => {
                                return (
                                    <BillsTableRows 
                                        key={row.id}
                                        name={row.name}
                                        id={row.id}
                                        value={formatValue(row.value)}
                                    />
                                )
                            })
                        }  
                        </TableBody>                   
                    </Table>
                </TableContainer>
            </Box>
            <Box display='flex' justifyContent='center' padding='3% 0'>
                <Link href='#' underline='hover' sx={style.summaryTableLink}>Ver todos</Link>
            </Box>
        </Grid>
    )
}