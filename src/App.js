import './App.css';
import { BrowserRouter ,Routes,Route ,} from 'react-router-dom';
import MainRouters from "./routes/mainRouters/mainRouters.js"

function App() {
  return (
    <>
  <BrowserRouter basename="/">
        <MainRouters></MainRouters>
  </BrowserRouter>
 
   </>
  );
}

export default App;
