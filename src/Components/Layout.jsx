import React from "react";
import SideBar from "./Sidebar/SideBar";

export default function Layout({ children }) {
  return (
    <div className="h-screen">
      <div className="h-16 w-full bg-black flex items-center justify-between">
        UniThink
      </div>
      <div className="w-full flex flex1 p-2">
        <div className="w-full md:w-9/12  bg-blue-800"></div>
        <div className="w-full md:w-3/12  bg-blue-100 h-96">
            <SideBar/>
        </div>
      </div>
    </div>
  );
}
