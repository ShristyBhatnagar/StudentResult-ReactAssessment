import * as react from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import'./View/index.scss'
import View from './View'
import ViewItem from './ViewItem';
import Result from './Result'

function App() {
  return (

    <div className="App">
      <div className='App__Logobar'><img className="App__Logo" src='zelar.png' alt='logo'/></div>
      <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<View/>}/>
        <Route path='/View' element={<View/>}/>
        <Route path='/View/:id' element={<ViewItem/>}/>
        <Route path='/create' element={<Result/>}/>
        <Route path='/update/:id' element={<Result/>}/>
          
          
        

      </Routes>


      </BrowserRouter>
    {/* <StudentResult/> */}
    </div>
  );
}

export default App;
