import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Nav from './components/Nav';
import Quote from './components/Quote';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Nav />}>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
