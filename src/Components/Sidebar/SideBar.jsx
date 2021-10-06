import axios from "axios";
import React, { useEffect, useState } from "react";
import SidebarCollectionDetails from "./SidebarCollectionDetails";
import SidebarCollections from "./SidebarCollections";

export default function SideBar() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCollection, setselectedCollection] = useState();
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    setShowDetails(selectedCollection?true:false)
      return () => {
          
      }
  }, [selectedCollection])
  useEffect(() => {
    axios
      .get(
        `https://api.yfret.com/wishlist/view_wishlist/?access_key=e191921352124a06a09bb811a86a5c3a&user_id=1628495970886`
      )
      .then((a) => setCollections(a.data?.data));
    return () => {};
  }, []);

  return (
    <div className="w-full">
      <div className="h-12 bg-black w-full text-white flex items-center text-center justify-between">
        <div onClick={()=>setselectedCollection(undefined)} className='p-2'>Back</div>
        <span className="mx-auto">Collections</span>
      </div>
      {showDetails ? (
        <SidebarCollectionDetails selectedCollection={selectedCollection} />
      ) : (
        <SidebarCollections
          collections={collections}
          onCollectionSelect={setselectedCollection}
        />
      )}
    </div>
  );
}
