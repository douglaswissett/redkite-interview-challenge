import React from 'react';
import './App.css';
import {
  PMQItem
} from './components';
import pmq from './json/PMQ.json';

console.log('pmq: ', pmq);

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>PMQ</h1>
        <ul>
          {
            pmq.map(item => (
              <PMQItem key={item.ID} item={item} />
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
