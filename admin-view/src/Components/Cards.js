import React from 'react'
import {useNavigate} from 'react-router-dom'
function Cards ({product}) {
  const navigate = useNavigate()

  const formatDate =() => {
    // console.log(this.history.createdAt)
    let timeData = new Date(product.datePurchase) 
    const timeDate = timeData.getDate()
    const timeMonth = timeData.getMonth() + 1
    const timeYear = timeData.getFullYear()
    return `${timeDate}-${timeMonth}-${timeYear}`
}

const formatRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
};
const actionHandler = (id) =>{
  navigate(`/${id}`)
}
  return (
    <tbody>
      <tr  className="table-row-2">
        <td  className="table-td">{product.description}</td>
        <td  className="table-td">{formatDate()}</td>
        <td  className="table-td">{formatRupiah(product.amount)}</td>
        <td  className="table-td">{product.status}</td>
        <td className="table-td">
          <div className="table-td-container">

            <img src={product.receipt} className="img-table" alt="" />
          </div>
        </td>
        
        <td  className="table-td" >
          <button className='nav-button' onClick={() => {
            actionHandler(product.id)
          }}> YOUR ACTION</button>
        </td>
      </tr>
    </tbody>
  )
   
}

  export default  Cards;  