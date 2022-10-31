import React, { useState } from "react";
import Login from "./Login";
import "./style.css";
function Home() {
  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };
  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };
  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {formValues.map((element, index) => (
          <div className="form-inline" key={index}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={element.name || ""}
              onChange={(e) => handleChange(index, e)}
            />
            <label>Email</label>
            <input
              type="text"
              name="name"
              value={element.email || ""}
              onChange={(e) => handleChange(index, e)}
            />
            {index ? (
              <button
                type="button"
                className="button remove"
                onClick={() => removeFormFields(index)}
              >
                {" "}
                Remove
              </button>
            ) : null}
          </div>
        ))}

        <div className="button-section">
          <button className="button submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Home;
