//import React
import React from "react";
import { NavLink } from "react-router-dom";

//Style Imports
import "../styles/App.css";

//Routing funtion to other rooms in chat app
export default function RoomLinks() {
  return (
    <section class="nav-box">
      <h3>Available Rooms</h3>
      <nav>
        <ul>
          <li>
            <NavLink to="/general">General</NavLink>
          </li>
          <li>
            <NavLink to="/pets">Pets</NavLink>
          </li>
          <li>
            <NavLink to="/food">Food</NavLink>
          </li>
          <li>
            <NavLink to="/Books">Books</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}
