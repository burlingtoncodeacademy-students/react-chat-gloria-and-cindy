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

      {/* Ad Component */}
      <aside className="ad">
        <Ad />
      </aside>

      {/* ChatBox Component */}
      <section className="chat">
        <ChatBox />
      </section>
    </main>
  );
}
