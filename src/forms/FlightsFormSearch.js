import React, { useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Formik, Field, Form, MyTextInput } from 'formik';
import * as Yup from 'yup';

export const FligthFormSearch = () => {
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
                <Field
                    label="Departure Airport"
                    name="departureAirport"
                    type="text"
                    placeholder="Departure Airport"
                />
                <Field
                    label="Arrival Airport"
                    name="arrivalAirport"
                    type="text"
                    placeholder="Arrival Airport"
                />
                <Field
                    label="Departure Date"
                    name="departureDate"
                    type="date"
                    placeholder="YYYY-MM-DD"
                />
                <Field
                    label="Return Date"
                    name="returnDate"
                    type="date"
                    placeholder="YYYY-MM-DD"
                />
                 <Field name="color" as="select">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </Field>
            </Form>
        </Formik>
    )
}

