import React, { useState } from "react";

import Child from "./Child";

const ChangeChildrenAlternative = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  /**
   * Alternative solution, a more dynamic approach.
   */

  return (
    <>
      <div className="btn-container">
        {Array.from(new Array(3), (_, index) => index + 1).map(
          (value, index) => {
            return (
              <button className="btn" onClick={() => setActiveIndex(index + 1)}>
                Render child {value}
              </button>
            );
          }
        )}
      </div>
      <div className="child-container">
        <Child index={activeIndex} />
      </div>
    </>
  );
};

export default ChangeChildrenAlternative;
