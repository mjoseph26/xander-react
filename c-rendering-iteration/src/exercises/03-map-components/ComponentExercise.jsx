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
        {data.map((person) => {
          const { id, img, login, avatar_url, post } = person;
          return (
            <SimpleCard key={id} img={avatar_url} login={login} post={post} />
          );
        })}
      </div>
    </div>
  );
};

const SimpleCard = (props) => {
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
        <Image img={props.img} />
        <div className="card-content">
          <Title login={props.login} />
          <Description post={props.post} />
        </div>
      </article>
    </>
  );
};

const Image = (props) => {
  return (
    <div className="card-image">
      <img src={props.img} alt={props.login} />
    </div>
  );
};

const Title = (props) => {
  return (
    <div className="card-content--header">
      <h2>{props.login}</h2>
    </div>
  );
};

const Description = (props) => {
  return (
    <div className="card-content--body">
      <p>{props.post}</p>
    </div>
  );
};

export default CardContainer;
