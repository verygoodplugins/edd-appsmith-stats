export default {
	renewalRates: () => {

		// Create an object to store the monthly renewal rates
		const monthlyRates = {};

		// Loop through the data and calculate the sum and count for each month
		RenewalRatesbyMonth.data.forEach(item => {
			const month = item.month_of_purchase.split('-')[1];
			if (!monthlyRates[month]) {
				monthlyRates[month] = { sum: 0, count: 0 };
			}
			monthlyRates[month].sum += item.average_renewal_rate;
			monthlyRates[month].count++;
		});

		// Calculate the average for each month and convert the month number to its name
		const result = Object.keys(monthlyRates)
		.sort((a, b) => parseInt(a) - parseInt(b))
		.map(month => {
			const monthName = new Date(`2017-${month}-01`).toLocaleString('default', { month: 'long' });
			return {
				month_of_purchase: monthName,
				average_renewal_rate: monthlyRates[month].sum / monthlyRates[month].count
			};
		});
		
		result[12] = result[0]; // fixes December coming out first.
		result.splice(0, 1);
		
		return result;
		
		
	},
}