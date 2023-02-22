/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom';


export default function () {

    let parames = useParams();
    ////////////////////////
    let [products, setproducts] = useState([]);
    ///////////////////////
    useEffect(()=>{
        dataget();
    },[]);
    //////////////////////////
    let dataget = async () => {
        let response = await axios.get(
            `https://api.escuelajs.co/api/v1/products/${parames.id}`
        );
        setproducts(response.data);
        };
    //////////////////////////
    return (
      <div style={{ minHeight: "83vh" }}>
        <img
          src={`${products.images}`}
          style={{marginLeft:"15%",padding:"1%" ,width:"70%"}}
        />
        <div style={{ fontSize: "30px" }}>
          <p
            style={{ color: "white", marginTop: "5%", marginLeft: "15%" }}
          >{`Product ID : ${parames.id}`}</p>
          <p
            style={{ color: "white", marginLeft: "15%" }}
          >{`Product Name : ${products.title}`}</p>
          <p
            style={{ color: "white", marginLeft: "15%" }}
          >{`Product Price : ${products.price}$`}</p>
        </div>
      </div>
    );
}
