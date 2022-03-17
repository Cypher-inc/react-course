import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container d-flex h-100">
      <div className="row justify-content-center align-self-center">
        <h1>Hello</h1>
        <div className="container content ">
          <div className="row">
            <div className="bg-dark">
              <h2>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="container d-flex h-100">
    //   <div className="row justify-content-center align-self-center">
    //     <h1 className="d-flex h-100 align-items-center">Hello World</h1>
    //   </div>
    // </div>
  );
};

export default App;
