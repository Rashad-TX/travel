import React, { useEffect } from "react";
import { Form, Input, FormGroup, FormText, Label, Col, Row, Card, Button } from 'reactstrap';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import airports from "../api/airports.json";


// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const FligthFormSearch = () => {

    const getInitialValues = () => {
        return {
            airportDeparture: 'DFW',
            airportDestination: 'LGA'
        }

    }

    const getFormikValidation = () => Yup.object().shape({
            airportDeparture: Yup.string()
            .max(4, 'Must be the 3-4 letter airport code')
            .min(3, 'Must be the 3-4 letter airport code')
            .required('Required'),
            airportDestination: Yup.string()
            .max(4, 'Must be the 3-4 letter airport code')
            .min(3, 'Must be the 3-4 letter airport code')
            .required('Required'),
            // departureDate: Yup.date() 
            // .required('Required'),
            // returnDate: Yup.date()
            // .ref('departureDate', 'Return date must be after departure date.')
            // })
    })

    const onFormikSubmission = async (values, setSubmitting) => {
        console.log(airports);
    }


    return (
        <Card style={{ padding: "20px" }}>
            <Formik
                initialValues={getInitialValues()}
                validationSchema={getFormikValidation()}
                onSubmit={(values, { setSubmitting }) => onFormikSubmission(values, setSubmitting)}
            >
                {({ handleChange, isSubmitting, handleBlur, errors, handleSubmit, values, touched }) => (

                    <Form>
                        <FormGroup>
                            <Label for="airportDeparture">
                                Airport Departure
                            </Label>
                            <Input type="text" name="airportDeparture" id="airportDeparture" placeholder="Select an Airport" onChange={handleChange('airportDeparture')} value={values.airportDeparture} />
                            {errors.airportDeparture && touched.airportDeparture ? (
                                <div style={{color:"red", marginTop:5}}>
                                   {errors.airportDeparture} 
                                </div>
                            ): null}
                        </FormGroup>
                        <FormGroup>
                            <Label for="airportDestination">
                                Airport Destination
                            </Label>
                            <Input type="text" name="airportDestination" id="airportDestination" placeholder="Select an Airport" onChange={handleChange('airportDestination')} value={values.airportDestination} />
                            {errors.airportDestination && touched.airportDestination ? (
                                <div style={{color:"red", marginTop:5}}>
                                   {errors.airportDestination} 
                                </div>
                            ): null}
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="airportArrivals">
                                Airport Arrivals
                            </Label>
                            <Input type="text" name="airportArrivals" id="airportArrivals" placeholder="Select an Airport" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="airportArrivals">
                                Airport Arrivals
                            </Label>
                            <Input type="text" name="airportArrivals" id="airportArrivals" placeholder="Select an Airport" />
                        </FormGroup> */}
                        <Button color="primary" onClick={() => handleSubmit()}>
                            Submit
                        </Button>
                    </Form>
                )}

            </Formik>
        </Card>
    )
}

