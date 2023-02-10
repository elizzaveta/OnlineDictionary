import Home from "../components/Home/Home";
import Dictionary from "../components/Dictionary/Dictionary";
import History from "../components/History/History";
import About from "../components/About/About";
import NotFound from "../components/NotFound/NotFound";

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