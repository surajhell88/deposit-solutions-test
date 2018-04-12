import React from "react";

import ActionHeader from "./ActionHeader";
import IssueList from "../containers/IssueList";
import AppFooter from "./AppFooter";

const App = props => (
  <div className="app">
    <div className="container">
      <ActionHeader />
      <IssueList />
      <AppFooter />
    </div>
  </div>
);

export default App;
