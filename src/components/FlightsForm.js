import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage, FieldArray, validateYupSchema } from 'formik';

const flightSearch = () => (
    <div>
        <h1>Find Round Trip Airfare</h1>
        <Formik
            initialValues={{
                departureDate: '',
                departureAirport: '',
                destinationAirport: '',
                returnDate:'',
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
        </Formik>
    </div>
)

