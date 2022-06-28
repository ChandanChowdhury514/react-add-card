import React from 'react';
import './style.css';
import CardDetails from  './components/CardDetails';
import OwnerDetails from './components/OwnerDetails';

import { Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <>
    <Routes>
      <Route path ='/card' element={< CardDetails/>}/>
      <Route path = '/owner' element={< OwnerDetails/>} />
      </Routes>
    </>
  );
}
