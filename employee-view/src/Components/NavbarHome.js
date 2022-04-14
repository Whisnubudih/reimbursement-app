import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import successAlert from '../hooks/successAlert';

function NavbarHome () {
  const navigate = useNavigate()

  const logouthandler = () =>{
    localStorage.clear()
    navigate('/login')
    successAlert('THANK YOU FOR COMING TO REIMBURSEMENT APP');
  }
  return (
    <div className="navbar">

    <div className='navbar-title-container'>
    <div className="navbar-text" >
        <h2>REIMBURSEMENT APP</h2>
      </div>
    <Link to="/" className="navbar-text" >Home</Link>
    <Link to="/piechart" className="navbar-text" >CHART Balance</Link>
    <Link to="/addform" className="navbar-text" >ADD Reimbutsement</Link>
    </div>
    <div className="navbar-text" >
      <Link to="/profile"className="navbar-text" >Profile</Link>
    <button onClick={() => {
                  logouthandler()
                  }} className="nav-button">
    <p className="table-button-text" >Log Out</p>
    </button>

    </div>
  </div>
 
    )
   
}

  export default  NavbarHome; 