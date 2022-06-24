import React from 'react'
import { Table, TableCell, TableContainer, TableBody, TableHead, TableRow, fabClasses } from '@mui/material'
import { UserListButton } from '../BasicButton/UserListButton'
import { BsArrowDownUp } from 'react-icons/bs'
import { BillsInfo } from './BillsInfo'
import BillEditModal from '../Modal/BillEditModal'
import useAPI from '../../hooks/useAPI'
import useLocalStorage from '../../hooks/useLocalStorage'

export const BillsList = (props) => {
    const { getItem } = useLocalStorage()
    const { get } = useAPI()
    const [data, setData] = React.useState([])
    const [openEdit, setOpenEdit] = React.useState()

    const dataHandler = async () => {
        const data = await get('/charge', getItem('token'))
        setData([...data])
    }
    const editOpenHandler = (id) => { setOpenEdit(id) }
    const editCloseHandler = () => { setOpenEdit(undefined) }
    const editClose = () => { setOpenEdit(false) }


    React.useEffect(() => {
        dataHandler()
        console.log(data)
    }, [])
    return (
        <TableContainer>
            <Table size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'><UserListButton startIcon={<BsArrowDownUp />} text='Cliente' /></TableCell>
                        <TableCell align='center'><UserListButton startIcon={<BsArrowDownUp />} text='ID Cobrança' /></TableCell>
                        <TableCell align='center'><UserListButton text='Valor' /></TableCell>
                        <TableCell align='center'><UserListButton text='Data' /></TableCell>
                        <TableCell align='center'><UserListButton text='Status' /></TableCell>
                        <TableCell align='center'><UserListButton text='Descrição' /></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((client) => {
                            console.log(client)
                            return (
                                <>
                                    <BillsInfo
                                        key={client.id}
                                        id={client.id}
                                        name={client.name}
                                        value={client.value}
                                        date={client.deadline}
                                        status={client.status}
                                        description={client.description}
                                        data={data}
                                        setData={setData}
                                        onClick={() => { editOpenHandler(client.id) }}
                                    />
                                    <BillEditModal
                                        open={openEdit == client.id}
                                        onClose={editCloseHandler}
                                        closeModal={() => { editClose() }}
                                        customer_id={client.customer_id}
                                        name={client.name}
                                        id={client.id}
                                        description={client.description}
                                    />
                                </>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}