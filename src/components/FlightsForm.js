import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const flightSearch = () => {
    return (
        <Formik 
            initialValues={{ departureAirport: '', arrivalAirport: '', departureDate: '', returnDate: '' }}
            validationSchema={Yup.object({
                departureAirport: Yup.string()
                .max(4, 'Must be the 3-4 letter airport code')
                .min(3, 'Must be the 3-4 letter airport code')
                .required('Required'),
                arrivalAirport: Yup.string()
                .max(4, 'Must be the 3-4 letter airport code')
                .min(3, 'Must be the 3-4 letter airport code')
                .required('Required'),
                departureDate: Yup.date() 
                .required('Required'),
                returnDate: Yup.date()
                .ref('departureDate', 'Return date must be after departure date.')
                })}
            onSubmit= {(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <MyTextInput
                    label="Departure Airport"
                    name="departureAirport"
                    type="text"
                    placeholder="Departure Airport"
                />
                <MyTextInput
                    label="Arrival Airport"
                    name="arrivalAirport"
                    type="text"
                    placeholder="Arrival Airport"
                />
                <MyTextInput
                    label="Departure Date"
                    name="departureDate"
                    type="date"
                    placeholder="YYYY-MM-DD"
                />
                <MyTextInput
                    label="Return Date"
                    name="returnDate"
                    type="date"
                    placeholder="YYYY-MM-DD"
                />
            </Form>

        </Formik>
    )
}
