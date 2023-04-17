import React, { useState } from "react";
import { data } from "./data";

const CardContainer = () => {
  /**
   * Load this into the App component, in App.js
   *
   *
   *  1. Use Array.map() to iterate over the data being imported from "../data"
   *  2. Deconstruct the properties from the object
   *  3. Return a <SimpleCard /> component, passing in the relevant props.
   *      - Remember to add a 'key' prop to your <SimpleCard />,
   *        giving it the value of the object's id property.
   */

  return (
    <div className="container">
      <h1>Iteration Exercise</h1>
      <div className="card-container">
        <SimpleCard />
      </div>
    </div>
  );
};

const SimpleCard = () => {
  /**
   *
   *
   *
   * 1. Refactor the JSX code so the Image, Title, and Description
   *    are returned from their own <Image />, <Title /> and <Description /> components.
   *
   * 2. Pass in the avatar_url, login and post props which are coming from the CardContainer component.
   *      - Hint: You access props by adding it as a parameter to the component function.
   *
   *  3. In each of your Image, Title and Description components:
   *      - Pass the props in as a parameter to the component function
   *      - Replace the hardcorded values with the values coming in as props.
   *        HINT: You need to use JavaScript syntax for this, so the prop
   *              values need to be placed between curly brackets {}.
   */

  return (
    <>
      <article className="card-wrapper">
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
      </article>
      {/** Image Component */}
      {/** Title Component */}
      {/** Description Component */}
    </>
  );
};

export default CardContainer;
