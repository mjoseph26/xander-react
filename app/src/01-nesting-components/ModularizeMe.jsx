import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

library.add(fas, faThumbsUp);

const ModularizeMe = () => {
  return (
    <main className="container">
      <header>
        <h1>My Un-Modular Blog</h1>
      </header>
      <section>
        <ul className="blogs">
          {/** Blog Post 1 */}
          <li>
            <article>
              <div className="blog-header">
                <div className="user-details">
                  <img
                    src="https://avatars.githubusercontent.com/u/1?v=4"
                    alt="mojombo"
                  />
                  <h5>mojombo</h5>
                </div>
              </div>
              <div className="blog-content">
                <p>
                  React is a powerful JavaScript framework for building dynamic,
                  interactive web applications. To get started with React,
                  install Node.js and use the Create React App tool to create a
                  new project. Then, create components using either JavaScript
                  classes or functions, and start building out your application
                  by composing components and adding interactivity.
                </p>
              </div>
              <footer class="btn-container">
                <button type="button" className='btn'>
                    I Like This!
                    <span className="icon">
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </span>
                </button>
              </footer>
            </article>
          </li>
           {/** Blog Post 2 */}
          <li>
            <article>
              <div className="blog-header">
                <div className="user-details">
                  <img
                    src="https://avatars.githubusercontent.com/u/2?v=4"
                    alt="defunkt"
                  />
                  <h5>defunkt</h5>
                </div>
              </div>
              <div className="blog-content">
                <p>
                  With React, you can create reusable UI components that can be
                  composed together to build complex user interfaces. React's
                  component-based architecture makes it easy to manage
                  application state, and its virtual DOM allows for efficient
                  updates to the UI. Additionally, React's large and active
                  developer community provides a wealth of resources and tools
                  to help you build great applications. With its power and
                  flexibility, React has become one of the most popular
                  front-end frameworks in use today.
                </p>
              </div>
              <footer class="btn-container">
                <button type="button" className='btn'>
                    I Like This!
                    <span className="icon">
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </span>
                </button>
              </footer>
            </article>
          </li>
           {/** Blog Post 3 */}
          <li>
            <article>
            <div className="blog-header">
              <div className="user-details">
                <img
                  src="https://avatars.githubusercontent.com/u/3?v=4"
                  alt="pjhyett"
                />
                <h5>pjhyett</h5>
              </div>
            </div>
            <div className="blog-content">
              <p>
                When building React applications, it's important to follow best
                practices to ensure your code is clean, maintainable, and
                performant. Use functional components instead of class
                components whenever possible, keep your components small and
                focused, use the React Developer Tools to debug your
                application, use PropTypes to validate your component props, and
                use React.memo to optimize performance.
              </p>
            </div>
            <footer class="btn-container">
                <button type="button" className='btn'>
                    I Like This!
                    <span className="icon">
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </span>
                </button>
              </footer>
            </article>
          </li>
          {/** Blog Post 4 */}
          <li>
            <article>
              <div className="blog-header">
                <div className="user-details">
                  <img
                    src="https://avatars.githubusercontent.com/u/4?v=4"
                    alt="wycats"
                  />
                  <h5>wycats</h5>
                </div>
              </div>
              <div className="blog-content">
                <p>
                  To take your React skills to the next level, try using
                  advanced techniques like higher-order components (HOCs) to
                  reuse functionality across multiple components, render props
                  to pass data and behavior down to child components, React
                  hooks to manage state and other functionality, React.lazy to
                  load components lazily, and React portals to render components
                  outside of the DOM hierarchy. These techniques can help you
                  build more powerful and flexible applications.
                </p>
              </div>
              <footer class="btn-container">
                <button type="button" className='btn'>
                    I Like This!
                    <span className="icon">
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </span>
                </button>
              </footer>
            </article>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ModularizeMe;
