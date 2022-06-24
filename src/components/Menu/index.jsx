import React from 'react';
import {AppBar, Box, Toolbar, Typography, IconButton, Button, Avatar} from "@mui/material"
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage'

import { MdMenu as MenuIcon} from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri'

export default function Menu({pageName, home=false}) {

  const navigate = useNavigate()
  const {clear} = useLocalStorage()
  const handleLogout = () => {
    clear()
    navigate('/login')
  }

  return (
    <Box >
      <AppBar sx={{borderBottom: '1px solid #ACD9C5', p: 1}} position="static" variant='dense' color="transparent" enableColorOnDark="true">
        <Toolbar>
          <Typography variant={home ? "h5" : "body2"} alignSelf={home ? "center" : "flex-end"} component="div" sx={home ? { flexGrow: 1, color: "#343447" } : { flexGrow: 1, color: "#0e8750" }}>
            {pageName}
          </Typography>
          <Avatar sx={{mr: 1}}>LR</Avatar> <Typography sx={{mr: 1, color: "#0E8750"}}> Lorena</Typography> <IconButton color="inherit" onClick={handleLogout}> <RiArrowDropDownLine /> </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}