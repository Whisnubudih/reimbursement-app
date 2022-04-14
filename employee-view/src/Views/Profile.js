import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import NavbarHome from '../Components/NavbarHome'
import {fetchUsers} from '../store/actionCreator';
import {useNavigate} from 'react-router-dom'

function Profile() {
    const navigate = useNavigate()
    const { users, productsLoading, productsError } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    const editHandler = (id) =>{
        navigate(`/profile/${id}`)
      }
  return (
    <section>
      
        <NavbarHome />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2>Your Profile</h2>
          </div>
          <div className="container-image">
            <h4> Name</h4>
            <p>{users.name}</p>
          </div>
          <div className="container-image">
            <h4> EMPLOYEE ID</h4>
            <p>{users.employeeID}</p>
          </div>
          <div className="container-image">
            <h4> Bank Account</h4>
            <p>{users.bankAccount}</p>
          </div>
          <button className="table-button1" onClick={() => {
        editHandler(users.id)
      }}> <p className="table-button-text">
                    EDIT YOUR PROFILE
                  </p> </button>

         
        </div>
      </div>
    </section>
  )

}

export default Profile; 