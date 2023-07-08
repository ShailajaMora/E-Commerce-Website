import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home.js";
import Checkout from "./components/checkout";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartContextProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Navbar expand="lg" bg="primary">
          <Container>
            <Navbar.Brand href="#">Ecommerce webapp</Navbar.Brand>
          </Container >
        </Navbar >
        <div className="my-2">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/checkout" component={Checkout} />
            </Switch>
          </Router>
        </div>
      </div >
    </CartContextProvider>
  );
}

export default App;
