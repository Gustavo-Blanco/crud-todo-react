import { useState } from "react";

const Form = ({ fetchStore, fetchGet }) => {
  const [values, setValues] = useState({
    name: "",
    time: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a name"
        name="name"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Enter a time"
        name="time"
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Enter a date"
        name="date"
        onChange={handleInputChange}
      />
      <button onClick={() => console.log("values", values)}>Crear</button>
    </div>
  );
};

export default Form;
