import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const API = "http://localhost:3001/toys";

function ToyContainer({handleLikeClick, toys, handleDeleteClick}) {

  const toysToDisplay = toys.map((item,index)=>{
    return (
      <ToyCard key={index} toy={item} onLikeClick={handleLikeClick} onDeleteClick={handleDeleteClick} />
    )
  })

  return (
    <div id="toy-collection">{toysToDisplay/* Render the collection of ToyCards */}</div>
  );
}

export default ToyContainer;
