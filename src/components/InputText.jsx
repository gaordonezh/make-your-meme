import React from "react";

const InputText = ({ label, value, setValue }) => (
  <div>
    <label htmlFor={`textOne${label}`}>{label}</label>
    <input
      id={`textOne${label}`}
      type="text"
      placeholder="Type some..."
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  </div>
);

export default InputText;
