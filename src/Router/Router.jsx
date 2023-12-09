import {Route, Routes} from "react-router-dom";
import ProtectedRoute from "src/Router/ProtectedRoutes.jsx";
import {adminRoutes, publicRoutes} from "src/constants/route.js";
import RouteNotFound from "src/components/RouteNotFound/RouteNotFound.jsx";

// The AppRouter component is responsible for defining the routing logic for the application.
const AppRouter = () => {
    return (
        <Routes>
            {// The Routes component can contain multiple Route components.
                publicRoutes.map(({path, name, component: Component}) => (
                    <Route key={name} path={path} element={<Component/>}/>
                ))
            }
            {
                adminRoutes.map(({path, name, component: Component}) => (
                    <Route key={name} path={path} element={<ProtectedRoute component={<Component/>}/>}/>
                ))
            }
            <Route path="*" element={<RouteNotFound/>} />
        </Routes>
    );
}

// The AppRouter component is exported for use in the main application where it will be
// used as the central point for navigating between different pages.
export default AppRouter;
