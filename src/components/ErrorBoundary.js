import React, { Component } from "react";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }
  static getDerivedStateFromError = (error) => {
    return { hasError: true };
  };
  componentDidCatch(error, info) {
    this.setState({ hasError: true, error });
  }
  render() {
    if (this.state.hasError) {
      return <h1>Oooops. That is not good{this.state.error}</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
