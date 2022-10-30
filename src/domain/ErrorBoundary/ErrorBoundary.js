import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
    // this.setState({error : error })
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <h1>{(new Error(this.state.error)).message}</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;