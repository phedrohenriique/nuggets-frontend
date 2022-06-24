import { Chip, Grid, Slide, Typography } from "@mui/material"
import { forwardRef, useCallback, useEffect, useRef, useState } from "react"
import billingList from "../../assets/images/billingList.svg"
import { style } from '../../config/theme/styles'
import Modal from "./Modal"

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

export default function BillingDetailsModal(props) {
  const textRef = useRef()
  const [statusColor, setStatusColor] = useState(null)
  useEffect(() => {
    setStatusColor(statusColorHandler)
  }, [])

  const getDateInBrFormat = useCallback((isoString) => {
    const date = new Date(isoString)
    return date.toLocaleDateString()
  }, [])

  const getValueInBRL = useCallback((value) => {
    const centsToBRL = Number(value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    return centsToBRL
  }, [])

  const statusColorHandler = () => {
    if (props.status === 'vencida') {
      return { color: '#971D1D', fontWeight: 'bold', backgroundColor: '#FFEFEF', textTransform: 'capitalize', width: 'fit-content', '& .css-wjsjww-MuiChip-label': { padding: '0px 15px', } }
    }
    if (props.status === 'pendente') {
      return { color: '#C5A605', fontWeight: 'bold', backgroundColor: '#FCF6DC', textTransform: 'capitalize', width: 'fit-content', '& .css-wjsjww-MuiChip-label': { padding: '0px 15px', } }
    }
    if (props.status === 'paga') {
      return { color: '#1FA7AF', fontWeight: 'bold', backgroundColor: '#EEF6F6', textTransform: 'capitalize', width: 'fit-content', '& .css-wjsjww-MuiChip-label': { padding: '0px 15px', } }
    }
  }

  return (
    <Modal
      open={props.open}
      onClose={props.closeModal}
      title='Detalhe da Cobrança'
      iconimage={<img src={billingList} />}
      TransitionComponent={Transition}
    >
      <Grid container direction='column' gap={3} sx={{ width: '100%' }}>
        <Grid container direction='column' item xs gap={1}>
          <Typography sx={style.billDetailsTitle}>Nome</Typography>
          <Typography sx={style.billDetailsText}>{props.name}</Typography>
        </Grid>
        <Grid container direction='column' item xs gap={1}>
          <Typography sx={style.billDetailsTitle}>Descrição</Typography>
          <Typography sx={style.billDetailsText}>{props.description}</Typography>
        </Grid>
        <Grid container gap={3}>
          <Grid container direction='column' item xs gap={1}>
            <Typography sx={style.billDetailsTitle}>Vencimento</Typography>
            <Typography sx={style.billDetailsText}>{getDateInBrFormat(props.date)}</Typography>
          </Grid>
          <Grid container direction='column' item xs gap={1}>
            <Typography sx={style.billDetailsTitle}>Valor</Typography>
            <Typography sx={style.billDetailsText}>{getValueInBRL(props.value)}</Typography>
          </Grid>
        </Grid>
        <Grid container gap={3}>
          <Grid container direction='column' item xs gap={1}>
            <Typography sx={style.billDetailsTitle}>ID cobranças</Typography>
            <Typography sx={style.billDetailsText}>{props.id}</Typography>
          </Grid>
          <Grid container direction='column' item xs gap={1}>
            <Typography sx={style.billDetailsTitle}>Status</Typography>
            <Chip label={props.status} ref={textRef} size='small' style={{}} sx={statusColor}></Chip>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  )
}