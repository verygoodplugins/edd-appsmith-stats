export default {
	netMRR: () => {
		
		const netRevenueChanges = [];

		for (let i = 0; i < NewMRRbyMo.data.length; i++) {
			const existingSubs = ExistingMRRbyMo.data[i].mrr;
			const newSubs = NewMRRbyMo.data[i].mrr;
			const voluntaryChurn = VoluntaryChurnbyMo.data[i].mrr;
			const delinquentChurn = DelinquentChurnbyMo.data[i].mrr;
			const netChange = existingSubs + newSubs - voluntaryChurn - delinquentChurn;
			netRevenueChanges.push( netChange );
		}
		
		return netRevenueChanges;

	},
	growthRate: () => {
		
		const netRevenueChanges = [];

		for (let i = 0; i < NewMRRbyMo.data.length; i++) {
			const existingSubs = ExistingMRRbyMo.data[i].mrr;
			const newSubs = NewMRRbyMo.data[i].mrr;
			const voluntaryChurn = VoluntaryChurnbyMo.data[i].mrr;
			const delinquentChurn = DelinquentChurnbyMo.data[i].mrr;
			const netChange = newSubs - voluntaryChurn - delinquentChurn;
			const percentChange = ( netChange / ( existingSubs + newSubs ) ) * 100;
			netRevenueChanges.push( percentChange );
		}
		
		return netRevenueChanges;
		
	},
	netSubscribers: () => {
		
		const netSubscriberChanges = [];

		for (let i = 0; i < NewMRRbyMo.data.length; i++) {
			const existingSubs = ExistingMRRbyMo.data[i].subscriptions;
			const newSubs = NewMRRbyMo.data[i].subscriptions;
			const voluntaryChurn = VoluntaryChurnbyMo.data[i].subscriptions;
			const delinquentChurn = DelinquentChurnbyMo.data[i].subscriptions;
			const netChange = existingSubs + newSubs - voluntaryChurn - delinquentChurn;
			netSubscriberChanges.push( netChange );
		}
		
		return netSubscriberChanges;
		
	}
}