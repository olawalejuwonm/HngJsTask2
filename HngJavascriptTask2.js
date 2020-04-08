let data = [{principal: 2500, time: 1.8}, {principal: 1000, time: 5},
        {principal: 3000, time: 1},
        {principal: 2000, time: 3}];
function interestCalculator(arr) {
    let interestData = [];
     for (indx in data){
		if (arr[indx].principal >= 2500 && arr[indx].time > 1 && arr[indx].time <3 ) {
			let rate = 3
			let interest = (arr[indx].principal * arr[indx].time * rate )/100
			interestData.push({principal: arr[indx].principal,
		rate: rate, time: arr[indx].time, interest: interest})
		}
		else if (arr[indx].principal >= 2500 && arr[indx].time >=  3) {
			let rate = 4
			let interest = (arr[indx].principal * arr[indx].time * rate )/100
			interestData.push({principal: arr[indx].principal,
		rate: rate, time: arr[indx].time, interest: interest})
		}
		else if (arr[indx].principal <= 2500 | arr[indx].time <= 1 ) {
			let rate = 2
			let interest = (arr[indx].principal * arr[indx].time * rate )/100
			interestData.push({principal: arr[indx].principal,
		rate: rate, time: arr[indx].time, interest: interest})
		}
		else {
			let rate = 1
			let interest = (arr[indx].principal * arr[indx].time * rate )/100
			interestData.push({principal: arr[indx].principal,
		rate: rate, time: arr[indx].time, interest: interest})
		}
		

	}
	console.log(interestData)
	return interestData
	
	
	
}
interestCalculator(data)