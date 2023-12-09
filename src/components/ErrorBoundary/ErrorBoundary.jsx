import React, {Component} from 'react';
import "./errorBoundary.scss"

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, error: null, errorInfo: null};
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({error: error, errorInfo: errorInfo});
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{whiteSpace: 'pre-wrap'}}>
                        {this.state.error?.toString()}
                        <br/>
                        {this.state.errorInfo?.componentStack}
                    </details>
                </div>);
        }

        // Normally, just render children
        return this.props.children;
    }
}

export default ErrorBoundary;
