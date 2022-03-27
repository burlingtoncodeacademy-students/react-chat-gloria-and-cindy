//importing hook from React
import React, {useState} from 'react';

//import Chat Box component
import ChatBox from "./components/ChatBox.jsx"

//style import
import './styles/App.css';
import NavLinks from './components/NavLinks.jsx'
import Ad from './components/Ad.jsx'
import Banner from './components/Banner.jsx'

export default function App() {

   return (
    <div className="App">
      <h1>Hello, Chat!</h1>
      <NavLinks/>
      <ChatBox/>
        </div>
  );
}
