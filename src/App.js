import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';
import AddTask from './TodoApp/components/addTask/AddTask';
import EditTask from './TodoApp/components/editTask/EditTask';
import Home from './TodoApp/components/home/Home';
import { GlobalProvider } from './TodoApp/context/GlobalState';


function App() {

  return (
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<AddTask />} />
            <Route path='/edit:id' element={<EditTask />} />
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;