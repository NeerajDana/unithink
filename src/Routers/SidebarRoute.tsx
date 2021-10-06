import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SidebarCollectionDetails from "../Components/Sidebar/SidebarCollectionDetails";
import SidebarCollections from "../Components/Sidebar/SidebarCollections";
export default function SidebarRoute() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <SidebarCollections />
        </Route>
        <Route path="/sidebar">
          <SidebarCollectionDetails />
        </Route>
        <Route path="/">
          <SidebarCollections />
        </Route>
      </Switch>
    </div>
  );
}
