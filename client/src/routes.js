import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import PainterPage from "./pages/PainterPage";
import Painters from "./pages/Painters"
import PicturePage from "./pages/PicturePage";
import Pictures from "./pages/Pictures";
import HelpQuestions from "./pages/HelpQuestions";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts"
import {
    ADMIN_ROUTE, BASKET_ROUTE,
    PICTURES_ROUTE, PICTURE_ROUTE,
    PAINTERS_ROUTE, PAINTER_ROUTE,
    QUESTIONS_ROUTE, ABOUTUS_ROUTE, CONTACTS_ROUTE, SERVICES_ROUTE,
    LOGIN_ROUTE, REGISTRATION_ROUTE,
    HOME_ROUTE,
} from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PAINTER_ROUTE + '/:id',
        Component: PainterPage
    },
    {
        path: PAINTERS_ROUTE,
        Component: Painters
    },
    {
        path: PICTURE_ROUTE + '/:id',
        Component: PicturePage
    },
    {
        path: PICTURES_ROUTE,
        Component: Pictures
    },
    {
        path: PICTURE_ROUTE + '/:id',
        Component: PicturePage
    },
    {
        path: QUESTIONS_ROUTE,
        Component: HelpQuestions
    },
    {
        path: ABOUTUS_ROUTE,
        Component: AboutUs
    },
    {
        path: SERVICES_ROUTE,
        Component: Services
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
]