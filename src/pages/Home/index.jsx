import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Grid } from "@mui/material";
import { FiHome, FiUsers, FiFile } from "react-icons/fi";

import billingList from "../../assets/images/billingList.svg";
import filterIcon from "../../assets/images/filter-icon.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import ClientRegisterModal from '../../components/Modal/ClientRegisterModal'
import Dashboard from "../Dashboard";
import Menu from "../../components/Menu/Menu";
import { ClientsList } from "../../components/User/ClientsList";
import { BillsList } from "../../components/User/BillsList";

import "./style.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid
          sx={{ pr: 2, pl: 2, pt: 3 }}
          container
          minHeight="100vh"
          dislay="flex"
          flexDirection="column"
          bgcolor="#F8F8F9"
        >
          {children}
        </Grid>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: "fit-content" }}
      bgcolor="#DEDEE9"

    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Menu Lateral"
        sx={{
          pt: 3,
          borderRight: 1,
          borderColor: "divider",
          "& .MuiTab-root": { textTransform: "capitalize", color: "#DA0175" },
          "& .MuiTab-root.Mui-selected":{ textTransform: "capitalize", color: "#343447" },
        }}
      >
        <Tab
          icon={
            <FiHome
              style={{ width: "35px", height: "35px", strokeWidth: "1.1" }}
            />
          }
          label="Home"
          {...a11yProps(0)}
        />
        <Tab
          icon={
            <FiUsers
              style={{ width: "35px", height: "35px", strokeWidth: "1.1" }}
            />
          }
          label="Clientes"
          {...a11yProps(1)}
        />
        <Tab
          icon={
            <FiFile
              style={{ width: "35px", height: "35px", strokeWidth: "1.1" }}
            />
          }
          label="Cobranças"
          {...a11yProps(2)}
        />
      </Tabs>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minheight: "100vh",
        }}
      >
        <TabPanel value={value} index={0}>
          <Menu pageName="Resumo das cobranças" home />
          <Dashboard />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabHeader name="Clientes" isClient />
          <ClientsList />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabHeader name="Cobranças" />
          <BillsList />
        </TabPanel>
      </Box>
    </Box>
  );
}

function TabHeader(props) {


  ////////// Add Clients Modal ////////////

  const [openClientModal, setOpenClientModal] = useState()
  const openClientModalHandler = () => { setOpenClientModal(true) }
  const closeClientModalHandler = () => { setOpenClientModal(false) }

  return (
    <>
      <Menu pageName={props.name} />
      <div className=" bill-wrapper">
        <div className="bill-box">
          <img src={billingList} />
          <h1>{props.name}</h1>
        </div>
        {
          props.isClient && <div className="button">
            <button onClick={openClientModalHandler} className="clients-add"> + Adicionar Clientes </button>
            <ClientRegisterModal
              open={openClientModal}
              onClose={closeClientModalHandler}
              closeModal={() => { closeClientModalHandler() }}
            />
          </div>
        }
        <div className="search-box">
          <img src={filterIcon} />
          <input type="text" placeholder="Pesquisar" />
          <img className="search-icon" src={searchIcon} />
        </div>
      </div>
    </>
  )
}