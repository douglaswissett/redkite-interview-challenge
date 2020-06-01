import React from 'react';
import './App.css';
import {
  PMQItem
} from './components';
import pmq from './json/PMQ.json';


function App() {
  let sorted;
  const sortBySourceVolumeMetric = () => {
    sorted = pmq.sort((a, b) => a.SourceVolumeMetric - b.SourceVolumeMetric);
  }

  const data = sorted || pmq;

  return (
    <div className="App">
      <div className="container">
        <h1>PMQ</h1>
        <div>
          <button onClick={sortBySourceVolumeMetric}>
            Sort by SourceVolumeMetric
          </button>
        </div>
        <ul className="row-list">
          {
            data.map(item => (
              <PMQItem key={item.ID} item={item} />
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
