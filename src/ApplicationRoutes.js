import React from 'react';
import { Route } from "react-router-dom";
import { Home, Details, PointDetails } from "./components";

export const ApplicationRoutes = () => (
     <>
          <Route path="/" exact componet={Home} /> 
          <Route path="/details/" exact component={Details} />
          <Route path="/points/:id" exact component={PointDetails} />
     </>
);