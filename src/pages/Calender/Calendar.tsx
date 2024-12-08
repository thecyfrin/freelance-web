import moment from "moment";
import React, { useState } from 'react';
import {
	Calendar as BigCalendar,
	CalendarProps,
	momentLocalizer,
} from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import Year from "./Year";
import './year-styles.css'
import './calendar-style.css'


const localizer = momentLocalizer(moment);

export default function CalendarWrapper(props) {

	return <BigCalendar className="h-[90%]" {...props} localizer={localizer} views={{
		day: true,
		week: true,
		month: true,
		year: Year

	}}

		style={{ height: '800px', width: '100%' }}
		messages={{ year: 'Year' }} />;
}
