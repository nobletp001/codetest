import React from 'react'
import '../../styles/dashboard.scss'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
function Dashboard() {
  return (
    <div className='dashboard-container'>
        
          <div className='dashboard-container-body'>
              <div className='dashboard-container-text'>View reports</div>

              <Box
              className=' table-container1'
              >
                  <TableContainer component={Paper}>
                      <Table sx={{ minWidth: '100%' }} size="small" aria-label="a dense table">
                          <TableHead>
                              <TableRow>
                                  <TableCell align="left" ><Checkbox /></TableCell>
                                  <TableCell align="left" className='tableCell1'>  February Report <span>NEW</span></TableCell>
                                  <TableCell align="left" className='tableCell2'>4th , October 2021  11:20am</TableCell>
                                  <TableCell align="right" ><div className='view-button'>View</div></TableCell>
                                  <TableCell align="center" >< ChatBubbleOutlineIcon/></TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody >
                              
                                  <TableRow
                                    
                                    //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                   
                                  >
                                  <TableCell align="left" ><Checkbox /></TableCell>

                                  <TableCell align="left" className='tableCell3'>March 2021 Report</TableCell>
                                  <TableCell align="left" className='tableCell4'>4th , October 2021  11:20am</TableCell>
                                  <TableCell align="right"><div className='view-button'>View</div></TableCell>
                                  <TableCell align="center" >< ChatBubbleOutlineIcon /></TableCell>

                                  </TableRow>
                              <TableRow

                              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                              >
                                  <TableCell align="left" ><Checkbox /></TableCell>

                                  <TableCell align="left" className='tableCell3'>March 2021 Report</TableCell>
                                  <TableCell align="left" className='tableCell4'>4th , October 2021  11:20am</TableCell>
                                  <TableCell align="right"><div className='view-button'>View</div></TableCell>
                                  <TableCell align="center" >< ChatBubbleOutlineIcon /></TableCell>

                              </TableRow>
                              <TableRow

                              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                              >
                                  <TableCell align="left" ><Checkbox /></TableCell>

                                  <TableCell align="left" className='tableCell3'>March 2021 Report</TableCell>
                                  <TableCell align="left" className='tableCell4'>4th , October 2021  11:20am</TableCell>
                                  <TableCell align="right"><div className='view-button'>View</div></TableCell>
                                  <TableCell align="center" >< ChatBubbleOutlineIcon /></TableCell>

                              </TableRow>
                              <TableRow

                              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                              >
                                  <TableCell align="left" ><Checkbox /></TableCell>

                                  <TableCell align="left" className='tableCell3'>March 2021 Report</TableCell>
                                  <TableCell align="left" className='tableCell4'>4th , October 2021  11:20am</TableCell>
                                  <TableCell align="right"><div className='view-button'>View</div></TableCell>
                                  <TableCell align="center" >< ChatBubbleOutlineIcon /></TableCell>

                              </TableRow>
                              <TableRow

                              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                              >
                                  <TableCell align="left" ><Checkbox /></TableCell>

                                  <TableCell align="left" className='tableCell3'>March 2021 Report</TableCell>
                                  <TableCell align="left" className='tableCell4'>4th , October 2021  11:20am</TableCell>
                                  <TableCell align="right"><div className='view-button'>View</div></TableCell>
                                  <TableCell align="center" >< ChatBubbleOutlineIcon /></TableCell>

                              </TableRow>
                              <TableRow

                              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                              >
                                  <TableCell align="left" ><Checkbox /></TableCell>

                                  <TableCell align="left" className='tableCell3'>March 2021 Report</TableCell>
                                  <TableCell align="left" className='tableCell4'>4th , October 2021  11:20am</TableCell>
                                  <TableCell align="right"><div className='view-button'>View</div></TableCell>
                                  <TableCell align="center" >< ChatBubbleOutlineIcon /></TableCell>

                              </TableRow>
                              <TableRow

                              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                              >
                                  <TableCell align="left" ><Checkbox /></TableCell>

                                  <TableCell align="left" className='tableCell3'>March 2021 Report</TableCell>
                                  <TableCell align="left" className='tableCell4'>4th , October 2021  11:20am</TableCell>
                                  <TableCell align="right"><div className='view-button'>View</div></TableCell>
                                  <TableCell align="center" >< ChatBubbleOutlineIcon /></TableCell>

                              </TableRow>

                          </TableBody>
                      </Table>
                  </TableContainer>
              </Box>
        </div>
        
        </div>
  )
}

export default Dashboard