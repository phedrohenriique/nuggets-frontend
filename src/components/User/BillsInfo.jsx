import React, { useEffect, useRef, useState } from 'react'
import { TableCell, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/material'
import { style } from '../../config/theme/styles'
import { UserListButton } from '../BasicButton/UserListButton'
import { FiEdit2, FiTrash } from 'react-icons/fi'
import BillDeleteModal from '../Modal/BillDeleteModal'
import BillingDetailsModal from "../../components/Modal/BillingDetailsModal"

export const BillsInfo = (props) => {
    const [openDelModal, setOpenDelModal] = useState(false)
    function openBillDelete() { setOpenDelModal(true) }
    function closeBillDelete() { setOpenDelModal(false) }

    const [openDetailModal, setOpenDetailModal] = useState(false)
    function openBillDetail() { setOpenDetailModal(true) }
    function closeBillDetails() { setOpenDetailModal(false) }

    const textRef = useRef()
    const [statusColor, setStatusColor] = useState(null)
    const statusColorHandler = () => {
        if (textRef.current.innerHTML === 'vencida') {
            return {
                color: '#971D1D',
                fontWeight: 'bold',
                textTransform: 'capitalize',
                background: '#FFEFEF'
            }
        }
        if (textRef.current.innerHTML === 'pendente') {
            return {
                color: '#C5A605',
                fontWeight: 'bold',
                textTransform: 'capitalize',
                background: '#FCF6DC'
            }
        }
        if (textRef.current.innerHTML === 'paga') {
            return {
                color: '#1FA7AF',
                fontWeight: 'bold',
                textTransform: 'capitalize',
                background: '#EEF6F6'
            }
        }
    }

    useEffect(() => {
        // handler must run after elements are renderized
        // need to use an useState variable
        setStatusColor(statusColorHandler())
        dataHandler(props.date)
    }, [])

    const dataHandler = (date) => {
        const dateShow = new Date(Date.parse(date))
        const parsedDate = dateShow.toLocaleString("pt-BR", { day: "numeric", month: "numeric", year: "numeric" })
        return parsedDate
    }

    const valueHandler = (value) => {
        const centsToBRL = (Number(value) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        return centsToBRL
    }

    return (
        <>
            <TableRow key={props.id}>
                <TableCell onClick={openBillDetail}><Typography sx={style.userInfoText}>{props.name}</Typography></TableCell>
                <TableCell onClick={openBillDetail}><Typography sx={style.userInfoText}>{props.id}</Typography></TableCell>
                <TableCell onClick={openBillDetail}><Typography sx={style.userInfoText}>{valueHandler(props.value)}</Typography></TableCell>
                <TableCell onClick={openBillDetail}><Typography sx={style.userInfoText}>{dataHandler(props.date)}</Typography></TableCell>
                <TableCell align='center' onClick={openBillDetail}><Typography ref={textRef} sx={statusColor} style={{ cursor: 'pointer' }}>{props.status}</Typography></TableCell>
                <TableCell align='center' onClick={openBillDetail}><Typography sx={style.userInfoText}>{props.description}</Typography></TableCell>
                <TableCell align='center'>
                    <Box width='150px' display='flex' gap={1}>
                        <UserListButton onClick={props.onClick} text={<FiEdit2 size={20} color='#747488' />} />
                        <UserListButton onClick={openBillDelete} text={<FiTrash size={20} color='#AE1100' />} />
                    </Box>
                </TableCell>
            </TableRow>
            <BillDeleteModal
                open={openDelModal}
                closeModal={closeBillDelete}
                id={props.id}
                data={props.data}
                setData={props.setData}
            />
            < BillingDetailsModal
                open={openDetailModal}
                closeModal={closeBillDetails}
                name={props.name}
                description={props.description}
                date={props.date}
                value={props.value}
                id={props.id}
                status={props.status}
            />
        </>
    )
}