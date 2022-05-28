import React from "react";

const SelectType = ({ imagen, handleSetImage }) => (
  <div>
    <label htmlFor="selectImage">Select your meme type</label>
    <select value={imagen} onChange={handleSetImage} id="selectImage">
      <option value="fire">CASA EN LLAMAS</option>
      <option value="futurama">FUTURAMA</option>
      <option value="history">HISTORY CHANNEL</option>
      <option value="matrix">MATRIX</option>
      <option value="philosoraptor">PHILOSORAPTOR</option>
      <option value="smart">SMART GUY</option>
      <option value="custom">PERSONALIZADO</option>
    </select>
  </div>
);

export default SelectType;
