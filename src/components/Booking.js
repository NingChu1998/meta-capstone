import React from "react";
import BookingForm from "./BookingForm";
import { useState } from "react";


const Booking = (props) => {
    return (
        <>
            <h1>Test</h1>
            <BookingForm availableTimes={props.availableTimes} />
        </>
    );
}

export default Booking;