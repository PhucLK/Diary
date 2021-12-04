import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Main from "./components/Main";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppReducer from "./reducers/AppReducer";
import { useReducer } from "react";
import AppContext from "./context/AppContext";

function App() {
  const intialState = { user: null, posts: [] };
  const [state, dispatch] = useReducer(AppReducer, intialState);
  return (
    <Router>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="Container">
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/*">
              <h1 className="page-not-found">Page Not Found !</h1>
            </Route>
          </Switch>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
