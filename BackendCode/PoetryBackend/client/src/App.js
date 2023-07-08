
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Upload from './pages/Upload';
import NotFound from './pages/NotFound';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/edit/:id" element={<Edit />}></Route>
      <Route path="/upload" element={<Upload />}></Route>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  );
}

export default App;
