import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home.js";
import Checkout from "./components/checkout";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" bg="primary">
        <Container>
          <Navbar.Brand href="#home">Ecommerce webapp</Navbar.Brand>
        </Container >
      </Navbar >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
