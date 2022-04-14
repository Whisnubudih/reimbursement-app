import React from 'react'

function Cards ({products}) {


  const formatDate =() => {
    // console.log(this.history.createdAt)
    let timeData = new Date(products.datePurchase) 
    const timeDate = timeData.getDate()
    const timeMonth = timeData.getMonth() + 1
    const timeYear = timeData.getFullYear()
    return `${timeDate}-${timeMonth}-${timeYear}`
}

const formatRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
};
  return (
    <tbody>
      <tr  className="table-row-2">
        <td  className="table-td">{products.description}</td>
        <td  className="table-td">{formatDate()}</td>
        <td  className="table-td">{formatRupiah(products.amount)}</td>
        <td  className="table-td">{products.status}</td>
        <td className="table-td">
          <div className="table-td-container">

            <img src={products.receipt} className="img-table" alt="" />
          </div>
        </td>
      </tr>
    </tbody>
  )
   
}

  export default  Cards;  