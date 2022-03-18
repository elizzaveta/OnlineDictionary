import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dictionary from "./components/Dictionary/Dictionary";
import Home from "./components/Home/Home";
import History from "./components/History/History";

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search/:query' element={<Dictionary/>}/>
            <Route path='/history' element={<History/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}



export default App;
