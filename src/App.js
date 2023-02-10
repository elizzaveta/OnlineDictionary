import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {appRoutes} from "./config/routes";

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
            {appRoutes.map((appRoute)=>
                <Route path={appRoute.path} element={appRoute.component}/>
            )}
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}



export default App;
