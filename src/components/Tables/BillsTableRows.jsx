import { TableCell, TableRow } from "@mui/material"
import {style} from '../../config/theme/styles'

export default function BillsTableRows(props) {
    return (
        <TableRow key={props.id}>
            <TableCell sx={style.summaryTableData}>{props.name}</TableCell>
            <TableCell sx={style.summaryTableData}>{props.id}</TableCell>
            <TableCell align='right' sx={style.summaryTableData}>{props.value}</TableCell>
        </TableRow>
    )
}