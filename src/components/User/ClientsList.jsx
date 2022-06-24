import React, { useEffect } from 'react'
import { Table, TableCell, TableContainer, TableBody, TableHead, TableRow } from '@mui/material'
import { UserListButton } from '../BasicButton/UserListButton'
import { BsArrowDownUp } from 'react-icons/bs'
import { ClientsInfo } from './ClientsInfo'
import useAPI from '../../hooks/useAPI'
import useLocalStorage from '../../hooks/useLocalStorage'
import BillRegisterModal from '../Modal/BillRegisterModal'

export const ClientsList = (props) => {
    const { getItem } = useLocalStorage()
    const { get } = useAPI()
    const [data, setData] = React.useState([])
    const [openRegister, setOpenRegister] = React.useState()

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getItem('token')}`
        }
    }

    const dataHandler = async () => {
        const data = await get('/customer', getItem('token'))
        setData([...data])
    }

    // React.useEffect(() => {
    //     const response = fetch('http://charges-be.herokuapp.com/customer', options)
    //         .then((data) => { return data.json() })
    //         .then((value) => { setData(value)  })
    // }, [])

    React.useEffect(() => {
        //dataHandler()

        fetch('https://charges-be.herokuapp.com/customer', options)
            .then((data) => { return data.json() })
            .then((value) => { setData(value) })

    }, [])

    const defaultValueHandler = (dataFetch) => {
        console.log(dataFetch.name)
        return dataFetch.name
    }

    //////////////// List Modal Logic //////////////


    const registerOpenHandler = (id) => { setOpenRegister(id) }
    const registerCloseHandler = () => { setOpenRegister(undefined) }
    const registerClose = () => { setOpenRegister(false) }

    useEffect(() => {

    }, [data])
    return (
        <TableContainer>
            <Table size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'><UserListButton startIcon={<BsArrowDownUp />} text='Cliente' /></TableCell>
                        <TableCell align='center'><UserListButton text='CPF' /></TableCell>
                        <TableCell align='center'><UserListButton text='E-mail' /></TableCell>
                        <TableCell align='center'><UserListButton text='Telefone' /></TableCell>
                        <TableCell align='center'><UserListButton text='Status' /></TableCell>
                        <TableCell align='center'><UserListButton text='Criar Cobrança' /></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((client) => {

                            return (
                                <>
                                    <ClientsInfo
                                        key={client.id}
                                        id={client.id}
                                        name={client.name}
                                        cpf={client.cpf}
                                        phone={client.phone}
                                        email={client.email}
                                        status={client.status}

                                        open={props.open}
                                        closeHandler={props.closeHandler}
                                        onClick={() => { registerOpenHandler(client.id) }}
                                        value={client.name}
                                    />
                                    <BillRegisterModal
                                        open={openRegister === client.id}
                                        onClose={registerCloseHandler}
                                        closeModal={() => { registerClose() }}
                                        name={client.name}
                                        customerId={client.id}
                                        isPaid={false}
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
