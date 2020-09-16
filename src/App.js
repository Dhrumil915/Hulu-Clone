import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import Nav from "./Nav";
import Result from "./Result";
import request from "./request";

function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);
  return (
    <div className="App">
    {/* Header */}
    <Header />
    {/* Nav */}
    <Nav setSelectedOption={setSelectedOption} />
    {/* Result */}
    <Result selectedOption={selectedOption} />
    </div>
  );
}

export default App;
