import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = "http://localhost:3001/toys";

function App() {
  const newFormRecord = {
    name: "",
    image: "",
    likes: 0    
  }
  const [showForm, setShowForm] = useState(false);

  const [dataForm, setDataForm] = useState(newFormRecord);

  const [toyList, setToyList] = useState([]);

  useEffect(loadToys,[]);
  function loadToys() {
    fetch(API)
      .then((r)=>r.json())
      .then((data)=>{
        setToyList([...data]);
      })
      .catch((e)=>{
        console.error("Error: " + e)
      });
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onHandleLikeClick(id,likes) {
    fetch(API + "/" + id,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'likes': likes + 1
      })
    })
      .then((r)=>r.json())
      .then(loadToys)
      .catch((e)=>console.error("Error: " + e));
  }

  function onHandleDeleteClick(id) {
    fetch(API + "/" + id,{
      method: 'DELETE'
    })
      .then((r)=>r.json())
      .then(loadToys)
      .catch((e)=>console.error("Error: " + e));
  }

  function  handleChange(event) {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    })
  }

  function validateForm(event) {
    if (dataForm.name === "") {
      alert("Toy's name must exist !")
      event.target.name.focus();
      return false;
    }
    if (dataForm.image === "") {
      alert("Toy's image must exist !")
      event.target.image.focus();
      return false;
    }
    return true;
  }

  function addToy(){
    fetch(API, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForm),
    })
      .then(response => response.json())
      .then(loadToys)
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    if (validateForm(event)) {
      //add Form's data
      addToy();
      //reset Form
      setDataForm(newFormRecord);
    }
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm changeValue={handleChange} submitForm={handleSubmitForm} toyRecord={dataForm} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer handleLikeClick={onHandleLikeClick} toys={toyList} handleDeleteClick={onHandleDeleteClick} />
    </>
  );
}

export default App;
