function formatDate(date) {
	const yrInSec = 365 * 24 * 60 * 60; // 31,536,000
	const mthInSec = 30 * 24 * 60 * 60; // 2,592,000
	const wkInSec = 7 * 24 * 60 * 60; // 604,800
	const dayInSec = 24 * 60 * 60; // 86,400
	const hrInSec = 60 * 60; // 3,600
	const minInSec = 60;

	const DateDiffInMilSec = Math.max(0, new Date() - new Date(date));
	const DateDiffInSec = Math.floor(DateDiffInMilSec / 1000);

	const dateFormat = new Intl.RelativeTimeFormat("en-us", {
		numeric: "always",
	});

	let timeAgo = 0;
	let timeFormat = "seconds";
	let timeCount = 0;

	if (DateDiffInSec > yrInSec) {
		timeCount = Math.floor(DateDiffInSec / yrInSec);
		timeFormat = "years";
	} else if (DateDiffInSec > mthInSec) {
		timeCount = Math.floor(DateDiffInSec / mthInSec);
		timeFormat = "months";
	} else if (DateDiffInSec > wkInSec) {
		timeCount = Math.floor(DateDiffInSec / wkInSec);
		timeFormat = "weeks";
	} else if (DateDiffInSec > dayInSec) {
		timeCount = Math.floor(DateDiffInSec / dayInSec);
		timeFormat = "days";
	} else if (DateDiffInSec > hrInSec) {
		timeCount = Math.floor(DateDiffInSec / hrInSec);
		timeFormat = "hours";
	} else if (DateDiffInSec > minInSec) {
		timeCount = Math.floor(DateDiffInSec / minInSec);
		timeFormat = "minutes";
	}
	timeAgo = dateFormat.format(-timeCount, timeFormat);

	return timeAgo;
}

export default formatDate;
