import React, {useState} from 'react';

import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';

const ChangeChildren = () => {
  /**
   * The most common scenario to use conditional rendering 
   * is when the user clicks on something in a web page 
   * with the intention of making something different show up. 
   * Let's use buttons as the click target. 
   * When the button is clicked, make the relevant Child component appear in the web page. 
   * Only one component should be visible at a time.
   * 
   * HINT: This challenge uses useState!
   */
  
  return (
    <>
    <div className='btn-container'>
      <button className="btn">Render Child 1</button>
      <button className="btn">Render Child 2</button>
      <button className="btn">Render Child 3</button>
    </div>
    <div className="child-container">
        
    </div>
    </>
  )
}

export default ChangeChildren