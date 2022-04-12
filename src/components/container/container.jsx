import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import {
  
    Outlet,
} from "react-router-dom";
function Container() {
  return (
<Box>
<Navbar/>
          <Box>
              <Grid container >
                  <Grid item  md={2} sx={{display:{xs:'none', sm:'none', md:'block'}}}>
                  <Sidebar/>
                  </Grid>
                  <Grid item xs={12} md={10}>
                      <Outlet/>
                  </Grid>
              </Grid>
          </Box>
</Box>
  )
}

export default Container