import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MysteriaGaudii from './pages/MysteriaGaudii';
import MysteriaLucis from './pages/MysteriaLucis';
import MysteriaDoloris from './pages/MysteriaDoloris';
import MysteriaGloriae from './pages/MysteriaGloriae';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gaudii' element={<MysteriaGaudii />} />
        <Route path='/lucis' element={<MysteriaLucis />} />
        <Route path='/doloris' element={<MysteriaDoloris />} />
        <Route path='/gloriae' element={<MysteriaGloriae />} />
      </Routes>
    </BrowserRouter>
  )
}



