import React from "react";

function ToyForm({changeValue, submitForm, toyRecord}) {
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={submitForm} >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          onChange={changeValue}
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyRecord.name}
        />
        <br />
        <input
          type="text"
          name="image"
          onChange={changeValue}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyRecord.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
