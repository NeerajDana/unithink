import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export default function SidebarCollectionDetails({ selectedCollection }) {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    if (selectedCollection) {
      const productsCode = selectedCollection.product_list
        .map((a) => `"${a.mfr_code}"`)
        .join(",");
      
        const data =  await axios.get(
          `https://api.yfret.com/fetch_details/fetch_by_mfr/?access_key=e191921352124a06a09bb811a86a5c3a&mfrcode_list=[${productsCode}]`
        ).then(a=>{
            if(a.data){
                if(a.data.data){
                    setProducts(a.data.data)
                }
            }
        });

        
    }
    return () => {};
  }, [selectedCollection]);
  return <div className="grid p-2 grid-cols-2 gap-2 ">{products && products.map(a=>{
      return <ProductCard key={a.mfr_code} product={a}/>
  })}</div>;
}

const ProductCard = ({product})=>{
    return <div className="h-40 rounded w-full bg-white">
            <img className="h-full object-cover w-full" src={product.image} alt="" />
        </div>
}