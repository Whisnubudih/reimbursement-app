import React, {useEffect} from 'react'
import Cards from '../Components/Cards'
import { useSelector,useDispatch } from 'react-redux';

import NavbarHome from '../Components/NavbarHome'
import { fetchProducts } from '../store/actionCreator';


function Home (){
  const { products, productsLoading, productsError } = useSelector((state) => state.reimbursementReducer);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  if (productsLoading) {
    return <section>
    <NavbarHome />   
<div className="home">
 <h2>YOUR REIMBURSEMENT</h2>
 </div>
 </section>
  }

  if (productsError) {
    return <div>{JSON.stringify(productsError)}</div>;
  }


  
  return (
    <section>
         <NavbarHome />   
    <div className="home">
      <h2>YOUR REIMBURSEMENT</h2>
    <div className="table">
    <table>
        <thead>

        <tr className="table-row-1" >
          <th className="table-th">DESCRIPTION</th>
          <th className="table-th">DATE OF PURCHASE</th>
          <th className="table-th">AMOUNT</th>
          <th className="table-th">STATUS</th>
          <th className="table-th">RECEIPT</th>
         
        </tr>
        </thead>

    
        
   
            
     
                      <Cards key={products.id} products={products} />

                  
       
       
     
    </table>
  </div>
  </div>
    </section>
  )
}

export default Home;
