import "./App.css";
import "../src/styles/partials/_globals.scss";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
