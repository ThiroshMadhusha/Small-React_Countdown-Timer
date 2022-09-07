import "./App.scss";
import Countdown from "./components/countdown/Countdown";
import Product from "./components/products/Product";
import { useState } from "react";

function App() {
  const [showCountdown, setShowCountdown] = useState(true);
  return (
    <div className="App">
      {showCountdown && (
        <Countdown onHideCountdown={() => setShowCountdown(false)} />
      )}
      <Product />
    </div>
  );
}

export default App;
