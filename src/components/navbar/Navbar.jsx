import React from 'react'
import Box from '@mui/material/Box';
import '../../styles/navbar.scss'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
function Navbar() {
  return (
    <Box sx={{ height:'40px', padding:3, display:'flex', alignItems:'center',justifyContent:'space-between' }}>

<Box className='navbar-logo'>
    <img src="./assests/vector.png" alt="" srcset=""  style={{width:'20px', height:'40%', paddingRight:'10px',objectFit:'contain'}} />
              HostBeak
              <ArrowRightIcon sx={{color:'black', fontSize:25, paddingLeft:1}}/>
</Box>
<Box sx={{display:'flex', alignItems:'center', marginRight:{md:10, sm:3}}}>
              <Box className='notification'> <NotificationsNoneIcon />
              <div></div>
              </Box>
              <Box className='image-navbar'>

              </Box>

<Box>Ogoluwa</Box>
<Box className='arrowdown'>
                  <ArrowDropDownIcon n sx={{ color: 'black', fontSize: 35 }}/>
</Box>

</Box>
    </Box>
  )
}

export default Navbar