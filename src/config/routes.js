import Home from "../pages/Home/Home";
import Dictionary from "../components/Dictionary/Dictionary";
import History from "../pages/History/History";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";

export const appRoutes = [
    {
        path: '/',
        component: <Home/>
    },
    {
        path: '/search/:query',
        component: <Dictionary/>
    },
    {
        path: 'history',
        component: <History/>
    },
    {
        path: 'about',
        component: <About/>
    },
    {
        path: "*",
        component: <NotFound/>
    }
]