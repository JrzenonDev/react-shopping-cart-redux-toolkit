import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
