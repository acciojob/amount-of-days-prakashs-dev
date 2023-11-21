//your JS code here. If required.
function daysOfAYear(year) {
	if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
	    return 366;
	return 365;
}
// const year = Number(prompt("Enter a year"));
// alert(daysOfAYear(year));