import React from 'react'
import '../../styles/home.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
function Home() {
  return (
      <div className='dashboard-container'>

          <div className='dashboard-container-body'>
           
<div className='add-bill'>Add bill</div>

<div className='inputContainer1'>
                  <div className='inputContainer1-item1'>
                      <div>Vendor</div>
                      <select name="cars" id="cars">
                          <option value="volvo">Choose</option>
                         
                      </select>
    </div>
                  <div className='inputContainer1-item2'>
                      <div>Date</div>
                      <input type="date" value="2017-06-01" />
    </div>
                  <div className='inputContainer1-item3'>
                      <div>BILL#</div>
        <input type="text" name="" id="" />
    </div>
</div>
            
              <div className='inputContainer2'>

            
                  <div className=' inputContainer1-item1-container'>
                      <div className='inputContainer1-item1'>
                          <div>Currency</div>
                          <select name="cars" id="cars">
                              <option value="volvo">USD</option>
                            
                          </select>
                      </div>
                      <div className='inputContainer1-item2'>
                         
                          <label>Upload Copy of Bill</label>
                          <div className='upload' >
                              <label htmlFor="inputfile" for="file-upload" >Upload File </label>
                              <img src="./assests/upload.png" alt=""srcset="" style={{ width: '19px', height: '19px', objectFit: 'contain', cursor:'pointer' }} />

                          </div>
                          <input type="file" id="file-upload"/>
                      </div>
                  </div>
                  <div className='inputContainer1-item1-container2'>
                      <div className='inputContainer1-item2'>
                          <div>Due Date</div>
                          <input type="date" value="2017-06-01" />

                      </div>
                      
                      <div className='inputContainer1-item3'>
                          <div>Due Date</div>
                          <input type="text" name="" id="" />

                      </div>

                  </div>
                  <div className='inputContainer1-item4'>
                      <div>Due Date</div>
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
            </div>

              <div className='table-container'>

                  <div style={{overflowX:'auto'}}>
                      <table>
                          <tr>
                              <th className='th'>Item</th>
                              <th className='th'>Expense Category</th>
                              <th className='th'>Description</th>
                              <th className='th'>Qty</th>
                              <th className='th'>Price</th>
                              <th className='th'>Tax</th>
                              <th className='th'>Amount</th>

                          </tr>
                          <tr>
                              <td className='td'>     <select name="cars" id="cars" className='select1'>
                                  <option value="volvo">USD</option>

                              </select></td>
                              <td className='td'>     
                                  <select name="cars" id="cars" className='select2'>
                                  <option value="volvo">USD</option>

                              </select></td>
                              <td className='td'>
                                  <input type="text" name="" id="" className='input1' />

                              </td>
                              <td className='td'>
                                  <input type="text" name="" id="" className='input2' />

                              </td>
                              <td className='td'>
                                  <input type="text" name="" id="" className='input3'/>

                              </td>
                              <td className='td'>
                                  <input type="text" name="" id="" className='input4' />
                                  <BorderColorOutlinedIcon sx={{fontSize:20, paddingLeft:'5px'}}/>
                              </td>
                              <td className='td' >
                                  <div className='tabledataflex'>
                                      <div>N0.00</div>

                                      <div> <DeleteIcon sx={{ color:'#081494'}} /></div>

                                </div>
                                  </td>



                          </tr>

                      </table>
         </div>

<div className='subtototal-container'>
                      <div className='total'> Subtotal: <span className='total1'>N0.00</span></div>
                      <div className='total'>Total (NGN): <span className='total1'>N0.00</span></div>
</div>
              </div>
              <div className='button-group'>

                 <button className='cancel'>Cancel</button> 
                  <button className='save'>Save</button> 

              </div>
          </div>

      </div>
  )
}

export default Home