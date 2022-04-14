 import { useEffect, useState } from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';

import BarChart from './BarChart';
import PieChart from './PieChart'
import NavbarHome from '../Components/NavbarHome'
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

function Chart() {
  const [data, setData] = useState({
    datasets: [{
        label: "",
        data: [],
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  labels: [], 
});


  useEffect(()=> {
    const fetchData = () =>  {
      fetch(`http://localhost:10000/reimbursementid`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
      }).then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        
        const label =[];
        const data = [];
        const remaining = "remaining balance";
        const balance = 1000000;
        
        label.push(res.description);
        data.push(res.amount)
        label.push(remaining);
        data.push(balance)
       
           
        
        // data.push(balance)

        setData(
          {
            datasets: [{
                label: "Reimbursement",
                data:data,
                backgroundColor:[
                    "rgba(75,192,192,1)",
                    "#50AF95",
                    "#ecf0f1",
                    "#f3ba2f",
                    "#2a71d0",
                    "red"
                ]
            },
          ],
          labels:label, 
        }
        )

       

      }).catch(e => {
        console.log("error", e)
      }) 
    }
  fetchData();
  }, [])

  


  return (
    <section>
      <NavbarHome />
       <div className="home">
      <h2>REIMBURSEMENT CHART</h2>
    <div className="table"></div>
    <div   style={{display:'flex'}}>
       <div style={{ width: 500 }}>
        <PieChart data={data} />
      </div>
      <div style={{ width: 800, margin:"10px"}}>
        <BarChart data={data} />
      </div>
    </div>
    </div>
    </section>
  );
}

export default Chart;
