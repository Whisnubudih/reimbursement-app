import  { useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import NavbarHome from '../Components/NavbarHome'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import {fetchUsers} from '../store/actionCreator';


function EditProfile() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    
    const [profileForm, setprofileForm] = useState({
       name:"",
       bankAccount:"",

  })

  const changeProfileInput = (e) => {
    const value = e.target.value
    const field = e.target.name
    setprofileForm({
      ...profileForm,
      [field]: value
    })
  }
  const {id} = useParams()
  const { users, productsLoading, productsError } = useSelector((state) => state.userReducer);
  
     useEffect(() =>{
    dispatch(fetchUsers())
    },[])

    const EditNewProfile = () =>{
        fetch(`https://reimbursement-server.herokuapp.com/users/${id}`, {
            method: 'PUT', // or 'PUT'
         headers: {
           'Content-Type': 'application/json',
           access_token: localStorage.getItem('access_token')
         },
         body: JSON.stringify(profileForm),
       })
       .then(response => response.json())
       .then(data => {
         console.log('Success:', data);
         setprofileForm(users)
 
         navigate('/profile')
       })
       .catch((error) => {
           console.error('Error:', error);
         });
     }
     
     useEffect(() => {
        setprofileForm(users)
     },[users])
  return (
    <section>
      
        <NavbarHome />

     
      <div className="formUser">
        <div className="form">
          <div className="container-image">
            <h2> EDIT PROFILE</h2>
          </div>
          <form className="form-add" onSubmit={(e) =>{
        e.preventDefault()
        EditNewProfile()
       }} >
              <div className="input-add">
              <label className="label-name" htmlFor="">Your name</label>
              <input className="input-name"  name='name' value={profileForm.name} onChange={changeProfileInput} type="text"/>

                <label className="label-name" htmlFor="">Bank Account</label>
                <input className="input-name" name='bankAccount' value={profileForm.bankAccount} onChange={changeProfileInput} type="text"/>

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

export default EditProfile; 