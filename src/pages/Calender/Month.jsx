import PropTypes from "prop-types";
import React from "react";
import moment from "moment";
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

class Month extends React.Component {
	state = {
		calendar: createCalendar(this.props.date),
	};

	componentDidUpdate(prevProps) {
		if (this.props.date !== prevProps.date) {
			this.setState({ calendar: createCalendar(this.props.date) });
		}
	}

	render() {
		const { calendar } = this.state;
		const { days, currentDate } = calendar;

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
					<div key={index} className=" p-2">
						{week.map((date) => (
							<CalendarDate
							className=""
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

// PropTypes for Month component
Month.propTypes = {
	date: PropTypes.object.isRequired, // Expected to be a moment object
};

// Static methods for react-big-calendar compatibility
Month.range = (date) => {
	const start = moment(date).startOf("month");
	const end = moment(date).endOf("month");
	return [start.toDate(), end.toDate()];
};

Month.navigate = (date, action) => {
	switch (action) {
		case navigate.PREVIOUS:
			return moment(date).add(-1, "month"); // Equivalent of dates.add(date, -1, "year")

		case navigate.NEXT:
			return moment(date).add(1, "month"); // Equivalent of dates.add(date, 1, "year")

		default:
			return date;
	}
};

Month.title = (date, { localizer }) => {
	return localizer.format(date, "MMMM YYYY");
};

export default Month;
