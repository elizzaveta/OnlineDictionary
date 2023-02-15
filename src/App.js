import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import {appRoutes} from "./config/routes";
import {useDispatch} from "react-redux";
import {setIsMobile} from "./redux/isMobileSlice";
import {useEffect} from "react";

function App() {
    const dispatch = useDispatch()
    useEffect(()=>{
        window.addEventListener("resize", ()=>{dispatch(setIsMobile())});
    });

    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    {appRoutes.map((appRoute) =>
                        <Route path={appRoute.path} key={appRoute.path} element={appRoute.component}/>
                    )}
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}


export default App;
