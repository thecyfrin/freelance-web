import { hasFlag } from "country-flag-icons";
import { getCode } from "country-list";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import moment from "moment";

class GetUtils {
	static getLabelNameColor(labelItems, code) {
		const label = labelItems.find((e) => e.value === code);
		return { labelName: label.name, labelColor: label.colorCode };
	}

	static getColorByPriority(pCode) {
		let name = "";
		let style = "";
		switch (pCode.toLowerCase()) {
			case "high":
				name = "High Priority";
				style = "bg-red-100/50 rounded-full text-red-500/70";
				break;
			case "medium":
				name = "Medium Priority";
				style = "bg-blue-100/50 rounded-full text-blue-500/70";
				break;
			case "low":
				name = "Not important";
				style = "bg-orange-100/50 rounded-full text-orange-500/70";
				break;
			default:
				name = "Wanka";
				style = "bg-indigo-100/50 rounded-full text-indigo-500/70";
				break;
		}
		return { priority: name, pStyle: style };
	}

	static getRelativeTime(x) {
		const timeX = moment(x); // Convert x to a moment object
		const timeY = moment(); // Convert y to a moment object

		const diffInMinutes = timeX.diff(timeY, "minutes"); // Calculate the difference in minutes
		if (diffInMinutes <= 3) {
			return "Just now"; // If the difference is less than or equal to 10 minutes
		} else if (diffInMinutes < 60) {
			return `${diffInMinutes} minutes ago`; // If the difference is less than an hour
		} else {
			const diffInHours = timeX.diff(timeY, "hours");
			if (diffInHours < 24) {
				return `${diffInHours} hours ago`;
			} else {
				const diffInDays = timeX.diff(timeY, "days");
				if (diffInDays < 7) {
					return `${diffInDays} days ago`;
				} else {
					const diffInWeek = timeX.diff(timeY, "weeks");
					if (diffInWeek < 5 && diffInDays < 30) {
						return `${diffInWeek} weeks ago`;
					} else {
						const diffInMonth = timeX.diff(timeY, "months");
						if (diffInMonth < 5) {
							return `${diffInMonth} months ago`;
						} else {
							const date = timeX.format("DD MMM, YYYY");
							return date;
						}
					}
				}
			}
		}
	}

	static getDateOfCalenderEvent(date1, date2) {
		const momentDate1 = moment(date1); // Convert to moment object
		const momentDate2 = moment(date2); // Convert to moment object

		if (
			momentDate1.year() === momentDate2.year() &&
			momentDate1.month() === momentDate2.month() &&
			momentDate1.date() === momentDate2.date()
		) {
			const date = `${momentDate1.format(
				"DD MMM, YYYY, hh:mm A"
			)} to ${momentDate2.format("hh:mm A")}`;
			return date;
		} else {
			const date = `${momentDate1.format("DD MMM, YYYY, hh:mm A")}`;
			return date;
		}
	}

	static getCountryFlag(countryName) {
		let countryCode = "";
		if (countryName.toLowerCase() === "united states") {
			countryCode = "US";
		} else if (countryName.toLowerCase() === "united kingdom") {
			countryCode = "GB";
		} else {
			countryCode = getCode(countryName);
		}

		console.log(countryCode);
		const flag = `https://catamphetamine.gitlab.io/country-flag-icons/3x2/${countryCode}.svg`;

		return flag;
	}

	static getSubVatTotal(invoice) {
		let beforeVat = 0;
		invoice.items.forEach((item) => {
			beforeVat += item.quantity * item.pup;
		});

		const percentage = parseFloat(invoice.vat.replace("%", ""));

		const vat = beforeVat * (percentage / 100);

		const total = beforeVat + vat;
		return {
			beforeVat: beforeVat,
			vatDue: vat.toFixed(2),
			total: total.toFixed(2),
		};
	}
}

export default GetUtils;
