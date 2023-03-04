export default {
	date: () => {
		const currentDate = new Date();
		const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
		const currentYear = currentDate.getFullYear();

		return `${currentMonth} ${currentYear}`;
	},
	formatDate: ( dateString = '2023-01' ) => {
	
		const dateParts = dateString.split("-");

		const year = dateParts[0];
		const month = new Date(dateString + "-01").toLocaleString('default', { month: 'long' });

		const formattedDate = `${month} ${year}`;

		return formattedDate;
	
	}
}