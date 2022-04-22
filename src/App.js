import {useState} from 'react';
import './App.css';

function App() {
const [buttonColor, setButtonColor] = useState('red');
const [disabled, setDisabled] = useState(false);

const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div className="App">
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        disabled={disabled}
      >
        Change to {newButtonColor}
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
