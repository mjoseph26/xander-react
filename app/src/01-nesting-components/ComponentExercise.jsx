import React, { useState } from "react";
import { data } from "../data";

const SimpleCard = () => {

  const selectImage = () => {
    // Bonus task!!
    // Generate a random number between the 0 and the length of the data array
    // Use the random number to index the data array
    // Set the image state to the avatar_url property of the randomly selected object.
  };

  return (
    <>
      <h1>Component Exercise</h1>
      <div className="card-wrapper">
        <div className="card-image">
          <img
            src="https://avatars.githubusercontent.com/u/1?v=4"
            alt="mojombo"
          />
        </div>
        <div className="card-content">
          <div className="card-content--header">
            <h2>Some Title to be replaced with props</h2>
          </div>
          <div className="card-content--body">
            <p>Some content to be replaced with props</p>
          </div>
        </div>
      </div>
      {/** Image Component */}
      {/** Title Component */}
      {/** Description Component */}
    </>
  );
};

export default SimpleCard;
