import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "./Cards.css";

export default function Products() {
  //get data from api//
  let [products, setproducts] = useState([]);

  useEffect(() => {
    dataget();
  }, []);

  let dataget = async () => {
    let response = await axios.get(" https://api.escuelajs.co/api/v1/products");
    setproducts(response.data);
  };
  //get data from api//

  

  return (
    <div className="row d-flex bg-dark " style={{ margin:'0' ,padding:'0', width: "100%" ,justifyContent:"center",marginLeft:"-1.5em"}}>
      {products.map((product) => {
        return (
          <Cards
            title={product.title}
            description={product.description}
            price={product.price}
            key={product.id}
            image={product.images}
            cat={product.category.name}
            id={product.id}
          />
        );
      })}
    </div>
  );
}
