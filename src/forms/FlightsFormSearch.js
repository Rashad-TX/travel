import React, { useEffect, useState } from "react";
import { Form, Input, FormGroup, FormText, Label, Col, Row, Card, Button } from 'reactstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

import airports from "../api/airports.json"

export const FligthFormSearch = () => {
  const [toDestination, setToDestination] = React.useState(airports)
  const [fromDestination, setFromDestination] = React.useState(airports)
  const getInitialValues = () => {
    return {
      airportDeparture: '',
      airportDestination: '',
      departureDate: '',
      returnDate: ''
    }
  }

  const getFormikValidation = () => Yup.object().shape({
    airportDeparture: Yup.string()
      .required('Required'),
    airportDestination: Yup.string()
      .required('Required'),
    // departureDate: Yup.date()
    // .required('Required'),
    // returnDate: Yup.date()
    // .ref('departureDate', 'Return date must be after departure date.')
    // })
  })

  const onFormikSubmission = async (values, setSubmitting) => {
    console.log(toDestination);
  }

  const airportDepartureSelector = (e, setFieldValue, target) => {
    let matchingAirports = airports.filter(airport => {
      if (airport.name.includes(e.target.value)) return airport
      if (airport.code.includes(e.target.value)) return airport
    })
    setToDestination(matchingAirports)
    // e.target.value
    setFieldValue(target, e.target.value)
  }

  const airportDestinationSelector = (e, setFieldValue, target) => {
    let matchingAirports = airports.filter(airport => {
      if (airport.name.includes(e.target.value)) return airport
      if (airport.code.includes(e.target.value)) return airport
    })
    setFromDestination(matchingAirports)
    // e.target.value
    setFieldValue(target, e.target.value)
  }

  // define departure and return state
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  // define handler change function on departure date
  const handleDepartureDate = (date) => {
    setDepartureDate(date);
    setReturnDate(null);
  };

  // define handler change function on return date
  const handleReturnDate = (date) => {
    setReturnDate(date);
  };

  return (
    <Card style={{ padding: "20px" }}>
      <Formik
        initialValues={getInitialValues()}
        validationSchema={getFormikValidation()}
        onSubmit={(values, { setSubmitting }) => onFormikSubmission(values, setSubmitting)}
      >
        {({ handleChange, isSubmitting, handleBlur, errors, handleSubmit, values, touched, setFieldValue }) => (
          <Form>
            <FormGroup>
              <Label for="airportDeparture">
                Airport Departure
              </Label>
              <Input
                type="text"
                id="airportDeparture"
                name="airportDeparture"
                placeholder="Select an Airport"
                onChange={(e) => airportDepartureSelector(e, setFieldValue, "airportDeparture")}
                value={values.airportDeparture}
              />
              {errors.airportDeparture && touched.airportDeparture ? (
                <div style={{ color: "red", marginTop: 5 }}>
                  {errors.airportDeparture}
                </div>
              ) : null}
              {toDestination && values.airportDeparture.length > 0 ? (
                <div style={{ marginTop: 5 }}>
                  {toDestination.slice(0, 3).map((airport, index) => {
                    return (
                      <div key={index} style={{ cursor: "pointer" }} onClick={() => setFieldValue("airportDeparture", airport.code)}>{airport.name}</div>
                    )
                  }
                  )}
                </div>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Label for="airportDestination">
                Airport Destination
              </Label>
              <Input
                type="text"
                id="airportDestination"
                name="airportDestination"
                placeholder="Select an Airport"
                onChange={(e) => airportDestinationSelector(e, setFieldValue, "airportDestination")}
                value={values.airportDestination}
              />
              {errors.airportDestination && touched.airportDestination ? (
                <div style={{ color: "red", marginTop: 5 }}>
                  {errors.airportDestination}
                </div>
              ) : null}
              {fromDestination && values.airportDestination.length > 0 ? (
                <div style={{ marginTop: 5 }}>
                  {fromDestination.slice(0, 3).map((airport, index) => {
                    return (
                      <div key={index} style={{ cursor: "pointer" }} onClick={() => setFieldValue("airportDestination", airport.code)}>{airport.name}</div>
                    )
                  }
                  )}
                </div>
              ) : null}
            </FormGroup>
            <FormGroup>
              <Label for="departureDate">
                Departure Date
              </Label>
              <DatePicker
                selected={departureDate}
                minDate={new Date()}
                onChange={handleDepartureDate}
                placeholderText="MM/DD/YYYY"
              />
            </FormGroup>
            <FormGroup>
              <Label for="returnDate">
                Return Date
              </Label>
              <DatePicker
                selected={returnDate}
                minDate={departureDate}
                onChange={handleReturnDate}
                placeholderText="MM/DD/YYYY"
              />
            </FormGroup>
            <Button color="primary" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  )
}