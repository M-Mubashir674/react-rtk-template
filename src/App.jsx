import {Suspense} from "react";

import {ToastContainer} from "react-toastify";

import AppRouter from "src/Router/Router.jsx";
import Loader from "src/components/Loader/Loader.jsx";

import "react-toastify/dist/ReactToastify.css";
import './app.scss'
import ErrorBoundary from "src/components/ErrorBoundary/ErrorBoundary.jsx";

const App = () => {
    return (
        <div className="app">
            <ErrorBoundary>
                <Suspense fallback={<Loader/>}>
                    <AppRouter/>
                </Suspense>
            </ErrorBoundary>
            <ToastContainer/>
        </div>
    )
}

export default App
