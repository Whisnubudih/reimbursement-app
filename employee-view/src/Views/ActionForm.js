import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import {useParams} from "react-router-dom"



function ActionForm() {
    const navigate = useNavigate()
    const [actionForm, setActionForm] = useState({
        ActionId:""
    })
    const changeActionInput = (e) => {
      const value = e.target.value
      const field = e.target.name
      setActionForm({
        ...actionForm,
        [field]: value
      })
    }

    const {id} = useParams()
    const newAction = () =>{
        fetch(`http://localhost:10000/status/${id}`, {
            method: 'PATCH', // or 'PUT'
         headers: {
           'Content-Type': 'application/json',
        //    access_token: localStorage.getItem('access_token')
         },
         body: JSON.stringify(actionForm),
       })
       .then(response => response.json())
       .then(data => {
         console.log('Success:', data);
        //  setItemsIdForm(itemsId)
 
         navigate('/')
       })
       .catch((error) => {
           console.error('Error:', error);
         });
      }

  return (
    <section>
      
        <NavbarHome />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2> Login</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        newAction()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">Date of Phurchase</label>
              {/* <input name='ActionId' value={itemsForm.name} onChange={changeItemFormInput} type="text"   className="form-control form-control-lg" /> */}
              <select   value={actionForm.ActionId} name="ActionId" onChange={changeActionInput} placeholder="What is genre?">
              <option >Choose your action</option>
                <option value="3" >Reject</option>
                <option  value="2">Accept</option>
               
                </select>

              </div>
              <div className="form-button">

                  <button className="table-button1" type="submit"> <p className="table-button-text">
                    Save
                  </p> </button>
                </div>
          </form>
        </div>
      </div>
    </section>
  )

}

export default ActionForm; 