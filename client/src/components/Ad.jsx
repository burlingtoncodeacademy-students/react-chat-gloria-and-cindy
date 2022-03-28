//library imports
import React from "react";

//style import
import "../styles/App.css";

class Ad extends React.Component {
  render() {
    return (
      <div>
        <div id="ad">
          <img
            src="https://image.shutterstock.com/image-vector/click-here-button-arrow-pointer-600w-1711547476.jpg"
            alt="Blue button that says Click Me"
            width="300px"
          ></img>
          <label> Click here to keep your identity private!</label>
        </div>
      </div>
    );
  }
}

export default Ad;
