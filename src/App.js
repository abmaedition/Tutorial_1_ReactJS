import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarHead from './components/NavBarHead';
import About from './components/About';
import AddData from './components/AddData';
import ViewData from './components/ViewData';
import EditData from './components/EditData';
import Home from './components/Home';
function App() {
  return (
    <>

      <BrowserRouter>
        <NavBarHead />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/add-data' element={<AddData />} />
          <Route path='/view-data' element={<ViewData />} />
          <Route path='/edit-data' element={<EditData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
