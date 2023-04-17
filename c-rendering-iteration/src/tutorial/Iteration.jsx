import React from "react";

const data = [
  {
    id: 1,
    name: "Mario",
    message: "I cannot get enough of the front end",
    img: "https://avatars.githubusercontent.com/u/17501287?v=4",
  },
  {
    id: 2,
    name: "Christian",
    message: "Sumeya, please.",
    img: "https://avatars.githubusercontent.com/u/98883458?v=4",
  },
  {
    id: 3,
    name: "Sumeya",
    message: "Thankyou, Christian",
    img: "https://avatars.githubusercontent.com/u/98185508?v=4",
  },
  {
    id: 4,
    name: "Tariq",
    message: "Minor 9ths and Maths are my jam.",
    img: "https://media.licdn.com/dms/image/D4E03AQGFbQnqC3qdYg/profile-displayphoto-shrink_800_800/0/1665746187855?e=2147483647&v=beta&t=o9_pD36z9oeBjo3Vl8g12tbpH5mQ7igaKf5eKBo7kMI",
  },
];

const Iteration = () => {
  return (
    <div className="container centered">
      <div className="card-container">
        {data.map((item) => {
          return (
            <div className="card-wrapper">
              <div className="card-image">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="card-message">
                <h3>{item.name}</h3>
                <p>{item.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Iteration;
