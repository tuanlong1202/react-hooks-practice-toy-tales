import React from "react";

function ToyCard({toy, onLikeClick, onDeleteClick}) {
  const {id,image,likes,name} = toy;

  function likeClick() {
    onLikeClick(id,likes);
  }

  function deleteClick() {
    onDeleteClick(id);
  }

  return (
    <div className="card">
      <h2>{name /* Toy's Name */}</h2>
      <img
        src={image /* Toy's Image */}
        alt={name /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{likes /* Toy's Likes */} Likes </p>
      <button className="like-btn" onClick={likeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={deleteClick} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
