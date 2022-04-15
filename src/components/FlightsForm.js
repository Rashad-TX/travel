import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';

export const dateValidator = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

class Flights extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            depatureDate: '',
            returnDate: '',
            origin: '',
            destination: '',
            touched: {
                departureDate: false,
                returnDate: false,
                origin: false,
                destination: false
            }
        };

    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(values) {
}

render () {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem>NOT SURE YET KSC</BreadcrumbItem>
                        <BreadcrumbItem active>Flight Search</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Flight Search</h2>
                    <hr />
                </div>
            </div>

            <div className="col">
                <Form onSubmit={values => this.handleSubmit(values)} >
                    <Row className="form-group">
                        <Label htmlFor="departureDate" md={2}>Departure Date</Label>
                        <Col>
                            <Control.text model=".departureDate" id="departureDate" name="departureDate"
                                placeholder="Departure Date"
                                className='form-control'
                                validators={{
                                    required,
                                    dateValidator,
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".departureDate"
                                show="touched"
                                component="div"
                                messages={{
                                    required: 'Required',
                                    dateValidator: 'Must use YYYY-MM-DD format'
                                }}
                            />
                        </Col>
                    </Row>
                </Form>
            </div>

        </div>

    );
}