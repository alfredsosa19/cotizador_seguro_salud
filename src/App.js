import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./utils/history";
import Login from "./app/pages/Login";
import ValidData from "./app/pages/ValidData";
import SelectPlan from "./app/pages/SelectPlan";
import FinalPage from "./app/pages/FinalPage";

const App = () => {
  return (
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/valid-data" component={ValidData} />
          <Route exact path="/select-plan" component={SelectPlan} />
          <Route exact path="/registered" component={FinalPage} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
