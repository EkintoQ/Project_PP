import {ADMIN_ROUTE, LOGIN_ROUTE, USER_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import User from "./pages/User";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: USER_ROUTE,
        Component: User
    }
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]