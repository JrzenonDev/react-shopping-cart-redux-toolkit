import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/login/Register";
import { Login } from "./pages/login/Login";
import { Account } from "./pages/account/Account";
import { useSelector } from "react-redux";

function App() {
  const isLoggIn = useSelector((state) => state.auth.isLoggIn);

  return (
    <>
      {isLoggIn && (
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/register" component={Register}></Route>

            <Route exact path="/account" component={Account}></Route>
          </Switch>
          <Footer />
        </Router>
      )}
      {!isLoggIn && <Login />}
    </>
  );
}

export default App;
