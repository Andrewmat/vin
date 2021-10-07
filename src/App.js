import { Router } from "@reach/router";
import Cueilleur from "./pages/cueilleur-de-vin";
import Home from "./pages/index";
import "./styles.css";

// TODO APRESENTAÇÃO BONITA DO RESULTADO

export default function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <Cueilleur path="/cueilleur-de-vin" />
      </Router>
    </div>
  );
}
