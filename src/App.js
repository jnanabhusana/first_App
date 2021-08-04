import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Create, image } from './Create.js';
import Card from './Card';
import data from './db'
function App() {

  return (
    <>
      <div className="App">
        {data.map((items) =>
          <Card
            imgsrc={items.img}
            title={items.name}
            sname={items.title} />
        )}
      </div>


    </>
  );
}

export default App;
