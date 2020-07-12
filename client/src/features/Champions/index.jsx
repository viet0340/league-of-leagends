import Filter from "components/Filter";
import Main from "components/Main";
import React from "react";
import { Route, Switch } from "react-router-dom";
import DetailChampion from "./DetailChampion";
import "./index.scss";
function Champions() {
  return (
    <div className="champion">
      <Switch>
        <Route path="/champions/:name" component={DetailChampion} />
        <Route>
          <Filter />
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default Champions;
