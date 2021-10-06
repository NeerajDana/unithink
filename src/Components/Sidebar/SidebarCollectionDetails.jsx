import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export default function SidebarCollectionDetails({ selectedCollection }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (selectedCollection) {
      const productsCode = selectedCollection.product_list
        .map((a) => `"${a.mfr_code}"`)
        .join(",");
      console.log(
        `https://api.yfret.com/fetch_details/fetch_by_mfr/?access_key=e191921352124a06a09bb811a86a5c3a&mfrcode_list=[${productsCode}]`
      );
      selectedCollection &&
        axios.get(
          `https://api.yfret.com/fetch_details/fetch_by_mfr/?access_key=e191921352124a06a09bb811a86a5c3a&mfrcode_list=[${productsCode}]`
        );
    }
    return () => {};
  }, [selectedCollection]);
  return <div>{selectedCollection?.name}</div>;
}
