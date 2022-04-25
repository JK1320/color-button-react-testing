import {useState} from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName){
return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
const [buttonColor, setButtonColor] = useState("MediumVioletRed");
const [disabled, setDisabled] = useState(false);

const newButtonColor =
  buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div className="App">
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <div className="input-div">
        <input
          type="checkbox"
          id="disable-button-checkbox"
          defaultChecked={disabled}
          aria-checked={disabled} // for screen readers
          onChange={(e) => setDisabled(e.target.checked)}
        />
        <label htmlFor="disable-button-checkbox">Disable Button</label>
      </div>
    </div>
  );
}

export default App;
