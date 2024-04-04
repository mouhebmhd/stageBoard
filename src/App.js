import './App.css';
import { BrowserRouter ,Routes,Route ,} from 'react-router-dom';
import MainRouters from "./routes/mainRouters/mainRouters.js"
import Navbar from './components/navbar.js';
function App() {
  return (
    <>
  <BrowserRouter basename="/">
  <Navbar></Navbar>
      <MainRouters></MainRouters>
  </BrowserRouter>
 
   </>
  );
}

export default App;
