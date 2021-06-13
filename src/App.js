import React, { useState } from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// React-Toastify
import "react-toastify/dist/ReactToastify.min.css";

// React-Router-dom
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Context
import { UserContext } from "./Context/UserContext";

// FireBase
import firebase from "firebase/app";
import "firebase/auth";

// Components
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import firebaseConfig from "./Config/firebaseConfig";

// init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
