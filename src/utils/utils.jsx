export default class Utils {
	static numberWithCommas(x) {
		const number = x.toFixed(2);
		var parts = number.split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	}
}
