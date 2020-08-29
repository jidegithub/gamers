import React from 'react';
import Helmet from 'react-helmet';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App my-8">
      <Helmet title="home"/>
      <Header/>
    </div>
  );
}

export default App;
