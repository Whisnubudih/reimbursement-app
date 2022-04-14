import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { addReimbursement } from '../store/actionCreator'
import { useDispatch } from 'react-redux';
import errorAlert from '../hooks/errorAlert';
import successAlert from '../hooks/successAlert';

function FormAdd() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [itemsForm, setItemsForm] = useState({
        datePurchase: '',
        description: '',
        amount: '',
        receipt:'',

  })

  const changeItemFormInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setItemsForm({
      ...itemsForm,
      [field]: value
    })
  }

  const addNewItem = () => {
    dispatch(addReimbursement(itemsForm))
    .then(() => {
      successAlert('Success add new reimbursement');
      navigate('/');
    })
    .catch((err) => {
      console.log(err);
      if (err == 'Error: Bad Request') {
        errorAlert(err, 'Please input field data');
      } else {
        errorAlert(err, 'PLeease fill the blank');
      }
    });
  };

  return (
    <section>
      
        <NavbarHome />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2> New Rembursement</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        addNewItem()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">Date of Phurchase</label>
              <input className="input-name" name='datePurchase' value={itemsForm.datePurchase} onChange={changeItemFormInput} type="date" placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">Description</label>
                <input className="input-name" type="text" name='description' value={itemsForm.description} onChange={changeItemFormInput} placeholder="Type Here"></input>

              
                <label className="label-name" htmlFor="">Amount</label>
                <input className="input-name" type="text" name='amount' value={itemsForm.amount} onChange={changeItemFormInput} placeholder="Type Here"></input>

                <label className="label-name" htmlFor="">Receipt</label>
                <input className="input-name" type="file" name='receipt' value={itemsForm.receipt} onChange={changeItemFormInput} placeholder="Type Here"></input>

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

export default FormAdd; 