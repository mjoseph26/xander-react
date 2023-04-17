import React, { useState } from "react";

import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

const ChangeChildren = () => {
  const [value, setValue] = useState(1);
  /**
   *
   * The most common scenario to use conditional rendering
   * is when the user clicks on something in a web page
   * with the intention of making something different show up.
   * Let's use buttons as the click target.
   * When the button is clicked, make the relevant Child component appear in the web page.
   * Only one component should be visible at a time.
   *
   * Load this component into the App component in App.js, and have
   * a crack at it.
   *
   * HINT: You can use useState for this challenge!
   *       Have a read through the 'Events' section of the LMS
   *       if you need some pointers with adding click events to buttons.
   *
   */

  return (
    <>
      <div className="btn-container">
        <button className="btn" onClick={() => setValue(1)}>
          Render Child 1
        </button>
        <button className="btn" onClick={() => setValue(2)}>
          Render Child 2
        </button>
        <button className="btn" onClick={() => setValue(3)}>
          Render Child 3
        </button>
      </div>
      <div className="child-container">
        {value === 3 ? <Child3 /> : value === 2 ? <Child2 /> : <Child1 />}
      </div>
    </>
  );
};

export default ChangeChildren;
