import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err, info) {
        this.setState({
            hasError: true
        });
    }
    render() {
        const {hasError} = this.state;
        const {children} = this.props;
        if(hasError) {
            return <h1>Oops, there is and error!</h1>
        } else {
            return children;
        }
    }
}
