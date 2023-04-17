import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConditionalClassNames = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container centered">
      <div className="box">
        <header className="title" onClick={() => setIsOpen(!isOpen)}>
          <h2>Click Me</h2>
          <FontAwesomeIcon icon="caret-up" />
        </header>
        <div className="box--content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur a
            deserunt facilis doloribus vero aut cupiditate. Cupiditate facere
            sequi vitae eveniet, deserunt, dolores deleniti assumenda id
            reiciendis a quasi officia delectus! Vero dicta error quidem
            aliquid, laudantium deleniti voluptatibus officiis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConditionalClassNames;
