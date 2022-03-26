//import React
import React from "react";
import { NavLink } from "react-router-dom";

//Routing funtion to other rooms in chat app
export default function RoomLinks() {
  return (
    <section class="nav-box">
      <h3>Available Rooms</h3>
      <nav>
        <NavLink to="/general">General</NavLink>
        <NavLink to="/pets">Pets</NavLink>
        <NavLink to="/food">Food</NavLink>
        <NavLink to="/Books">Books</NavLink>
      </nav>
    </section>
  );
}
