// import PropTypes from 'prop-types'
import PropTypes from "prop-types";
import React from "react";
import moment from "moment";
import dates from "react-big-calendar/lib/utils/dates";
import { navigate } from "react-big-calendar/lib/utils/constants";

function createCalendar(currentDate) {
	if (!currentDate) {
		currentDate = moment();
	} else {
		currentDate = moment(currentDate);
	}

	const first = currentDate.clone().startOf("month");
	const last = currentDate.clone().endOf("month");
	const weeksCount = Math.ceil((first.day() + last.date()) / 7);
	const calendar = Object.assign([], { currentDate, first, last });

	for (let weekNumber = 0; weekNumber < weeksCount; weekNumber++) {
		const week = [];
		calendar.push(week);
		calendar.year = currentDate.year();
		calendar.month = currentDate.month();

		for (let day = 7 * weekNumber; day < 7 * (weekNumber + 1); day++) {
			const date = currentDate.clone().set("date", day + 1 - first.day());
			date.calendar = calendar;
			week.push(date);
		}
	}

	return calendar;
}

function CalendarDate(props) {
	const { dateToRender, dateOfMonth } = props;
	const today =
		dateToRender.format("YYYY-MM-DD") === moment().format("YYYY-MM-DD")
			? "today"
			: "";

	if (dateToRender.month() < dateOfMonth.month()) {
		return (
			<button disabled={true} className="date prev-month">
				{dateToRender.date()}
			</button>
		);
	}

	if (dateToRender.month() > dateOfMonth.month()) {
		return (
			<button disabled={true} className="date next-month">
				{dateToRender.date()}
			</button>
		);
	}

	return (
		<button
			className={`date in-month ${today}`}
			onClick={() => props.onClick(dateToRender)}>
			{dateToRender.date()}
		</button>
	);
}

// Define PropTypes for CalendarDate component
CalendarDate.propTypes = {
	dateToRender: PropTypes.object.isRequired, // Use PropTypes.instanceOf(moment) if using moment objects
	dateOfMonth: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired,
};

class Calendar extends React.Component {
	state = {
		calendar: undefined,
	};

	componentDidMount() {
		this.setState({ calendar: createCalendar(this.props.date) });
	}

	componentDidUpdate(prevProps) {
		if (this.props.date !== prevProps.date) {
			this.setState({ calendar: createCalendar(this.props.date) });
		}
	}

	render() {
		if (!this.state.calendar) {
			return null;
		}

		return (
			<div className="month">
				<div className="month-name flex items-center justify-center">
					{this.state.calendar.currentDate.format("MMMM")}
				</div>
				{["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
					<span key={index} className="day flex p-2">
						{day}
					</span>
				))}
				{this.state.calendar.map((week, index) => (
					<div key={index} className="p-2">
						{week.map((date) => (
							<CalendarDate
								key={date.date()}
								dateToRender={date}
								dateOfMonth={this.state.calendar.currentDate}
								onClick={(date) =>
									alert(`Will go to daily-view of ${date.format("YYYY-MM-DD")}`)
								}
							/>
						))}
					</div>
				))}
			</div>
		);
	}
}

class Year extends React.Component {
	render() {
		let { date, ...props } = this.props;
		let range = Year.range(date); // Using moment as dates replacement
		const months = [];
		const firstMonth = moment(date).startOf("year"); // Equivalent of dates.startOf(date, "year")

		for (let i = 0; i < 12; i++) {
			months.push(
				<Calendar key={i + 1} date={moment(firstMonth).add(i, "month")} /> // Equivalent of dates.add(firstMonth, i, "month")
			);
		}

		return (
			<div className="year scrollable-year">{months.map((month) => month)}</div>
		);
	}
}

Year.propTypes = {
	date: PropTypes.object.isRequired,
};

Year.range = (date) => {
	return [moment(date).startOf("year")]; // Using moment as dates replacement
};

Year.navigate = (date, action) => {
	switch (action) {
		case navigate.PREVIOUS:
			return moment(date).add(-1, "year"); // Equivalent of dates.add(date, -1, "year")

		case navigate.NEXT:
			return moment(date).add(1, "year"); // Equivalent of dates.add(date, 1, "year")

		default:
			return date;
	}
};

Year.title = (date, { localizer }) => localizer.format(date, "yyyy");

export default Year;
