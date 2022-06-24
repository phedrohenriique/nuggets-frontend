import { Slide } from "@mui/material"
import { forwardRef } from "react"
import useAPI from '../../hooks/useAPI'
import useLocalStorage from "../../hooks/useLocalStorage"
import { DeleteConfirmationCard } from "../Cards/DeleteConfirmationCard"
import Modal from "./Modal"

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />
})

export default function BillDeleteModal(props) {
    const { del } = useAPI()
    const { getItem } = useLocalStorage()

    async function handleDeleteCharge() {
        await del(`/charge/${props.id}`, getItem('token'))
        const localData = [...props.data]
        const chargeIndex = localData.findIndex(el => el.id === props.id)
        localData.splice(chargeIndex, 1)
        props.setData(localData)
        props.closeModal()
    }

    return (
        <Modal
            open={props.open}
            onClose={props.closeModal}
            TransitionComponent={Transition}
            hideCloseButton
        >
            <DeleteConfirmationCard
                delCharge={handleDeleteCharge}
                closeModal={props.closeModal}
                title='Tem certeza que deseja excluir esta cobrança?'
            />
        </Modal>
    )
}