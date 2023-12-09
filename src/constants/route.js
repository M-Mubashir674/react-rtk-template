import Home from "src/pages/Home/index.jsx";
import Login from "src/pages/Auth/Login/Login.jsx";
import Admin from "src/pages/Admin/index.jsx";

export const publicRoutes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
    }, {
        path: '/signin',
        component: Login,
        name: 'Login',
    }
];

export const adminRoutes = [
    {
        path: '/admin',
        component: Admin,
        name: 'Admin',
    }
];
