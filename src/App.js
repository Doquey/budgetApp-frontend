import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from "./pages/Login.jsx";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>hello there!</h1>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
