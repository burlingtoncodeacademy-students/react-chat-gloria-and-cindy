//library imports
import React from "react";

class NavLinks extends React.Component {
  render() {
    return (
      <>
        <h3>Available Rooms</h3>

        {/* need to add links/routes to all chat Rooms -- likely use link and have different components from rooms 1-4 */}
        
        <div id="navigation">
          <ul>
            <li id="room1">Room 1</li>
            <li id="room2">Room 2</li>
            <li id="room3">Room 3</li>
            <li id="room4">Room 4</li>
          </ul>
        </div>
      </>
    );
  }
}

export default NavLinks;
