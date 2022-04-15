import React, { Component } from "react";
import { Control, Form, Errors } from 'react-redux-form';

class Flights extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            depatureDate: '',
            returnDate: '',
            origin: '',
            destination: ''
        };

    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(values) {
}

render () {

    return (

    );
}