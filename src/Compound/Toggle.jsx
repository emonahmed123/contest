import { useContext, useState, createContext } from 'react';

// Create Context
const ToggleContext = createContext();

// Main Toggle Component
const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);

  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

// Toggle.On component
On = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return on ? children : null;
};

// Toggle.Off component
Off = ({ children }) => {
  const { on } = useContext(ToggleContext);
  return !on ? children : null;
};

// Toggle.Button component (Checkbox to toggle)
Button = () => {
  const { on, toggle } = useContext(ToggleContext);
  return (
    <label>
      <input
        type="checkbox"
        checked={on}
        onChange={toggle}
      />
      <span>{on ? 'ON' : 'OFF'}</span>
    </label>
  );
};



Toggle.Off =Off
Toggle.On =On
Toggle.Button=Button




// slot pattern

export default Toggle;