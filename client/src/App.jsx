//importing hook from React
import React, { useState } from "react";

//import components
import ChatBox from "./components/ChatBox.jsx";
import NavLinks from "./components/NavLinks.jsx";
import Ad from "./components/Ad.jsx";
import Banner from "./components/Banner.jsx";

//style import
import "./styles/App.css";

export default function App() {
  return (
    <main className="App">
      {/* Banner Component */}
      <header className="banner">
        <Banner />
      </header>
      {/* NavLinks Component */}
      <nav className="nav-links">
        <NavLinks />
      </nav>
      {/* ChatBox Component */}
      <section className="chat-box">
        <ChatBox />
      </section>
      {/* Ad Component */}
      <aside className="ad">
        <Ad />
      </aside>
    </main>
  );
}
