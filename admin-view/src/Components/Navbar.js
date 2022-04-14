import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Navbar () {
  const navigate = useNavigate()

  const logouthandler = () =>{
    localStorage.clear()
    navigate('/login')
  }
  return (
    <div className="navbar">
      <div>
        <h2>REIMBURSEMENT APP</h2>
      </div>

    <button className="nav-button">
    <Link to="/register" className="table-button-text" >Sign Up</Link>
    </button>
  </div>
 
    )
   
}

  export default  Navbar; 