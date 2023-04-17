import React from "react";

const AlternatingBackground = () => {
  /**
   * Load this into the App component, in App.js
   *
   *
   * The <div> below contains a className 'big-background'.
   *
   * At the bottom of App.css, you will find the CSS Rule targeting .big-background. This rule contains
   * the default background (DarkBlue/Pink/Light Blue)
   *
   * Below that you will find the same .big-background selector, with some extra
   * class selectors attached:
   *
   * .big-background.alternative-bg-1
   * .big-background.alternative-bg-2
   *
   *
   *  These rules contain alternative background images
   * which will override the default, when the class name is added to the <div>
   *
   * ----------------------------------------------------------------------
   *
   * A variable triggerVal has been initialized to integer 1.
   * This integer is the default value, and corresponds with the default background.
   *
   * Your challenge:
   *
   *  If the value of triggerVal is 2, the class 'alternative-bg-2' should be added to the className
   *  of the <div>.
   *
   *  If the value of triggerVal is 3, the class 'alternative-bg-3' should be added to the <div>.
   *
   *  Bonus challenge: Conditionally render the <h2> tag containing the value that corresponds to the 'value' variable.
   *  The default heading contains the text 'The value is 1'
   *
   *
   */

  const value = 1;
  return (
    <div className="big-background">
      <h1>Alternate my background!</h1>
      <h2>The value is 1</h2>
      {/** <h2>The value is 2</h2> */}
      {/** <h2>The value is 3</h2> */}
    </div>
  );
};

export default AlternatingBackground;
