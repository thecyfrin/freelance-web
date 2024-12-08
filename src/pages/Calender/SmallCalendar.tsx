import moment from "moment";
import React, { useState } from 'react';
import {
    Calendar as BigCalendar,
    CalendarProps,
    momentLocalizer,
} from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import './calendar-style.css'
import './year-styles.css'

import Month from "./Month";


const localizer = momentLocalizer(moment);

export default function SmallCalendar(props) {

    return (
        <>

            <div>
                <BigCalendar {...props} localizer={localizer} views={{
                    month: Month
                }}
                    toolbar={false}
                />
            </div>

        </>
    )

}
