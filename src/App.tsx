import React, { ChangeEvent, useMemo, useState } from 'react';
import './App.css';
import { CelsiusKnob } from "./components/CelsiusKnob";
import { KelvinKnob } from "./components/KelvinKnob";
import { FahrenheitKnob } from "./components/FahrenheitKnob";

export function App() {
  const [celsius, setCelsius] = useState(43);
  const kelvin = useMemo(() => celsius + 273.15, [celsius]);
  const fahrenheit = useMemo(() => celsius * 9 / 5 + 32, [celsius]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    console.log(val);
    setCelsius(val);
  }

  return (
    <div className="App">
      <input
        type="number"
        value={celsius}
        onChange={onChange}
        className="CelsiusInput"
      />

      <CelsiusKnob min={0} max={100} value={celsius} />
      <KelvinKnob min={0} max={500} value={kelvin} />
      <FahrenheitKnob min={0} max={150} value={fahrenheit} />
    </div>
  );
}
