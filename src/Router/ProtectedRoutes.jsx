import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// The ProtectedRoute component is designed to wrap around any component
// that should only be accessible to authenticated users.
export default function ProtectedRoute({ component: Component, ...rest }) {
    // useSelector is a hook from react-redux that allows you to extract data from the Redux store state
    // Here, it's used to access the 'authData' part of the state to get the 'user' object
    const { user } = useSelector((state) => state.authData);

    // The component returns one of two things:
    // - If the user is authenticated (i.e., the 'user' object exists), it renders the component passed to it
    // - If the user is not authenticated, it renders the Navigate component from react-router-dom,
    //   which redirects the user to the '/signin' route
    return user ? (
        // Render the component passed in as a prop if the user is authenticated
        Component
    ) : (
        // Redirect to the sign-in page if the user is not authenticated
        <Navigate to={"/signin"} replace={true} />
    );
}
