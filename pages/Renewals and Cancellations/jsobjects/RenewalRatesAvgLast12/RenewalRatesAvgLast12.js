export default {
	rates: () => {

		var data = RenewalRatesbyMonth.data;
		var total = 0;
		for (let i = data.length - 13; i < data.length - 1; i++) {
			total += data[i].average_renewal_rate;
		}

		return ( total / 12).toFixed(1);
		
	}
}