import React from 'react'
import '../../styles/sidebar.scss'
import CreditCardIcon from '@mui/icons-material/CreditCard';

import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
function Sidebar() {
  return (
    <div className='sidebar-container'>

      <div className="center">
        <ul>
          <li>
            <img src="./assests/vector1.png" alt="" srcset="" style={{ width: '25px', height: '25px', objectFit: 'contain' }} />
            <Link to='/' style={{ textDecoration: 'none' }}>
              <span>Welcome</span>

            </Link>
          </li>
          <li>
            <img src="./assests/vector2.png" alt="" srcset="" style={{ width: '25px', height: '25px', objectFit: 'contain' }} />

           <Link to='/dashboard' style={{textDecoration:'none'}}>
              <span>Dashboard</span>
           </Link>
          </li>  
           <li>
            <img src="./assests/vector3.png" alt="" srcset="" style={{ width: '25px', height: '25px', objectFit: 'contain' }} />

            <span>Sales</span>
          </li>  
        <div>
            <li className='shopCartBox'>
              <ShoppingCartIcon sx={{ fontSize: 30, color: '#fff', textAlign: 'center', paddingLeft: '4px' }} />
              <span>Purchases
              </span>

            </li>  
         <div className='Sidebar-Purchasee-List'>
              <span>Bills</span>
              <span>Vendors</span>
              <span>Product & Services</span>
         </div>


           
        </div>
       
           <li>
            <img src="./assests/vector4.png" alt="" srcset="" style={{ width: '25px', height: '25px', objectFit: 'contain' }} />

            <span>Accounting</span>
          </li> 
           <li>
            <img src="./assests/vector5.png" alt="" srcset="" style={{ width: '25px', height: '25px', objectFit: 'contain' }} />

            <span>Banking</span>
          </li> 
           <li>
            <img src="./assests/vector6.png" alt="" srcset="" style={{ width: '25px', height: '25px', objectFit: 'contain' }} />

            <span>Payroll</span>
          </li>
            <li>
            <img src="./assests/vector7.png" alt="" srcset="" style={{ width: '25px', height: '25px', objectFit: 'contain' }} />

            <span>Reports</span>
          </li>
          <li>
            <GroupIcon sx={{ fontSize: 30, color: '#C4C4C4' }}/>
            <span>Analytics</span>
          </li>
          <li>
            <SettingsIcon sx={{ fontSize: 30, color:'#C4C4C4'}}/>
            <span>Settings</span>
          </li>


          <li className='logOut'>
            <LogoutIcon sx={{ fontSize: 20, color: 'red' }} className='rotate' />
            <span>Logout</span>
          </li>


        </ul>
        <button className='sidebarPayment'>
          <CreditCardIcon sx={{ fontSize: 30, color: '#fff', paddingRight:'2px' }}/>
          Accept Payments</button>


      </div>
    </div>
  )
}

export default Sidebar