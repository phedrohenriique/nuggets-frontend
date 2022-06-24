import { AppBar, Avatar, Box, Grid, IconButton, Menu as MuiMenu, MenuItem, Toolbar, Typography } from "@mui/material"
import { useCallback, useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import editIcon from '../../assets/icons/edit.svg'
import logoutIcon from '../../assets/icons/logout.svg'
import useLocalStorage from '../../hooks/useLocalStorage'
import EditProfile from '../EditProfile/EditProfile'

export default function Menu({pageName, home=false}) {

  const navigate = useNavigate()
  const {clear, getItem} = useLocalStorage()
  const [anchorEl, setAnchorEl] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleOpenMenu = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleLogout = useCallback(() => {
    clear()
    navigate('/login')
  }, [])

  const handleEditUser = () => {
    setModalIsOpen(true)
  }
  return (
    <Box >
      <AppBar 
        sx={{borderBottom: '1px solid #ACD9C5',}} 
        position="static" 
        variant='dense' 
        color="transparent" 
        enableColorOnDark={true}
      >
        <Toolbar>
          <Typography 
          variant={home ? "h5" : "body2"} 
          alignSelf={home ? "center" : "flex-end"} 
          component="div" 
          sx={home ? { flexGrow: 1, color: "#343447" } : { flexGrow: 1, color: "black" }}
          >
            {pageName}
          </Typography>
          <Avatar 
            sx={{mr: 1, color: "#0E8750"}}
          >
            {getItem('user').name[0]}
          </Avatar> 
          <Typography 
            sx={{mr: 1, color: "#0E8750"}}
          >
            {
              getItem('user').name
            }
          </Typography> 
          <IconButton 
            color="inherit" 
            onClick={handleOpenMenu} 
          > 
            <RiArrowDropDownLine /> 
          </IconButton>
        </Toolbar>
      </AppBar>
      <MuiMenu 
        open={Boolean(anchorEl)} 
        anchorEl={anchorEl} 
        onClose={handleCloseMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} 
      >
        <MenuItem>
          <Grid container>
            <IconButton 
              sx={{display: 'flex', flexDirection: 'column'}}
              onClick={handleEditUser}
            >
              <img src={editIcon} alt='Editar' />
              <Typography>Editar</Typography>
            </IconButton>
            <IconButton 
              sx={{display: 'flex', flexDirection: 'column'}}
              onClick={handleLogout}
            >
              <img src={logoutIcon} alt='Logout' />
              <Typography>Sair</Typography>
            </IconButton>
          </Grid>
        </MenuItem>
      </MuiMenu>
      <EditProfile isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
    </Box>
  )
}