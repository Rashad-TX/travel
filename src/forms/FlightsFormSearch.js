import React, { useEffect } from "react";
import { Form, Input, FormGroup, FormText, Label, Col, Row, Card, Button } from 'reactstrap';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import airports from "../api/airports.json"
export const FligthFormSearch = () => {
  const [toDestination, setToDestination] = React.useState(airports)
  const [fromDestination, setFromDestination] = React.useState(airports)
  const getInitialValues = () => {
    return {
      airportDeparture: '',
      airportDestination: 'LGA'
    }
  }
  const getFormikValidation = () => Yup.object().shape({
    airportDeparture: Yup.string()
      // .max(4, 'Must be the 3-4 letter airport code')
      // .min(3, 'Must be the 3-4 letter airport code')
      .required('Required'),
    airportDestination: Yup.string()
      // .max(4, 'Must be the 3-4 letter airport code')
      // .min(3, 'Must be the 3-4 letter airport code')
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
  const airportSelector = (e, setFieldValue, target) => {
    let matchingAirports = airports.filter(airport => {
      if (airport.name.includes(e.target.value)) return airport
      if (airport.code.includes(e.target.value)) return airport
    })
    setToDestination(matchingAirports)
    // e.target.value
    setFieldValue(target, e.target.value)
  }
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
                onChange={(e) => airportSelector(e, setFieldValue, "airportDeparture")}
                value={values.airportDeparture}
              />
              {errors.airportDeparture && touched.airportDeparture ? (
                <div style={{color:"red", marginTop:5}}>
                  {errors.airportDeparture}
                </div>
              ): null}
              {toDestination && values.airportDeparture.length > 0 ? (
                <div style={{marginTop:5}}>
                  {toDestination.slice(0, 3).map((airport, index) => { return (
                      <div key={index} style={{cursor:"pointer"}} onClick={() => setFieldValue("airportDeparture", airport.code)}>{airport.name}</div>
                    )}
                  )}
                </div>
              ): null}
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
                onChange={handleChange('airportDestination')}
                value={values.airportDestination}
              />
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