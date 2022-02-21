import React from 'react';
import GetImages from './components/GetImages';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <h1 className='AppName'> TEST APP </h1>
      <GetImages />
    </div>
  );
}

export default App;