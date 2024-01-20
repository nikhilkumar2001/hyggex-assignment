import React from "react";
import './App.css'
import Nav from "./components/nav";
import HomeBar from "./components/homeBar";
import Content from "./components/content";
import EndContent from './components/endContent'

function App() {
  return <>
  <Nav />
  <HomeBar />
  <Content />
  <EndContent />  
  </>;
}

export default App;
