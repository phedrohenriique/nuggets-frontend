import { Grid } from "@mui/material";
import React, { useState } from "react";
import { RiUserFollowLine as UserCheck, RiUserUnfollowLine as UserCross } from "react-icons/ri";

import { BillingSummary } from "../../components/BillingSummary/BillingSummary";
import BillsTable from "../../components/Tables/BillsTable";
import OnTimeClients from "../../components/Tables/OnTimeClients";
import useAPI from '../../hooks/useAPI';
import useLocalStorage from '../../hooks/useLocalStorage';

import demonstrativePreview from "../../assets/images/demonstrative-preview.svg";
import demonstrativeOverdue from "../../assets/images/demostrative-overdue.svg";
import demostrativePaid from "../../assets/images/demostrative-paid.svg";

export default function Dashboard() {

  const { get } = useAPI()
  const { getItem } = useLocalStorage()
  const [paidCharges, setPaidCharges] = useState([])
  const [pendentCharges, setPendentCharges] = useState([])
  const [overdueCharges, setOverdueCharges] = useState([])
  const [onDayClients, setOnDayClients] = useState([])
  const [overdueClients, setOverdueClients] = useState([])
  const [paidValue, setPaidValue] = useState(0)
  const [pendentValue, setPendentValue] = useState(0)
  const [overdueValue, setOverdueValue] = useState(0)
  React.useEffect(() => {
    getClientData()
    getChargeData()
  }, [])

  async function getClientData() {
    const clients = await get('/customer', getItem('token'))
    const onDayClients = clients.filter((client) => client.status === 'em dia')
    const overdueClients = clients.filter((client) => client.status === 'inadimplente')
    setOnDayClients([...onDayClients])
    setOverdueClients([...overdueClients])
  }

  async function getChargeData() {
    const charges = await get('/charge', getItem('token'))
    const paidCharges = charges.filter((charge) => charge.status === 'paga')
    const pendentCharges = charges.filter((charge) => charge.status === 'pendente')
    const overdueCharges = charges.filter((charge) => charge.status === 'vencida')
    const paidValues = paidCharges.reduce((prev, curr) => { return prev + Number(curr.value) }, 0)
    const pendentValues = pendentCharges.reduce((prev, curr) => { return prev + Number(curr.value) }, 0)
    const overdueValues = overdueCharges.reduce((prev, curr) => { return prev + Number(curr.value) }, 0)
    setPaidCharges([...paidCharges])
    setPendentCharges([...pendentCharges])
    setOverdueCharges([...overdueCharges])
    setPaidValue(paidValues)
    setPendentValue(pendentValues)
    setOverdueValue(overdueValues)
  }

  return (
    <Grid  container flexGrow="1" spacing={1}  gap="20px" padding="30px">

      <Grid container spacing={3}>
        <Grid item xs>
          <BillingSummary
            bgcolor="#EEF7F7"
            label="Cobranças Pagas"
            value={paidValue}
            img={demostrativePaid}
          />
        </Grid>
        <Grid item xs>
          <BillingSummary
            bgcolor="#FFEFEF"
            label="Cobranças Vencidas"
            value={overdueValue}
            img={demonstrativeOverdue}
          />
        </Grid>
        <Grid item xs>
          <BillingSummary
            bgcolor="#FCF6DC"
            label="Cobranças Previstas"
            value={pendentValue}
            img={demonstrativePreview}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs>
          <BillsTable
            tableName="Cobranças Vencidas"
            tableStatus="overdue"
            data={overdueCharges}
          />
        </Grid>
        <Grid item xs>
          <BillsTable
            tableName="Cobranças Previstas"
            tableStatus="pendent"
            data={pendentCharges}
          />
        </Grid> 
        <Grid item xs>
          <BillsTable
            tableName="Cobranças Pagas"
            tableStatus="paid"
            data={paidCharges}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <OnTimeClients
            data={overdueClients}
            icon={<UserCross
              style={{ width: '20px', height: "20px" }}
              color= '#971D1D'/>}
            label="Clientes Inadimplentes"
          />
        </Grid>
        <Grid item xs={6}>
          <OnTimeClients
            data={onDayClients}
            icon={<UserCheck
              style={{ width: '20px', height: "20px" }}
              color='#1FA7AF' />}
            label="Clientes em Dia"
            status="em dia"
          />
        </Grid>
      </Grid>

    </Grid>
  )
}