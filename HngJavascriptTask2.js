var data = [{principal: 2500, time: 1.8}, {principal: 1000, time: 5},
 {principal: 3000, time: 1},
{principal: 2000, time: 3}]
function interestCalculator(arr) {
	var interestData = []
	for (indx in data){
		// var rate = 3
		// var interest = (arr[indx].principal * arr[indx].time * rate )/100
		if (arr[indx].principal >= 2500 && arr[indx].time > 1 && arr[indx].time <3 ) {
			var rate = 3
			var interest = (arr[indx].principal * arr[indx].time * rate )/100
			interestData.push({principal: arr[indx].principal,
		rate: rate, time: arr[indx].time, interest: interest})
		}
		else if (arr[indx].principal >= 2500 && arr[indx].time >=  3) {
			var rate = 4
			var interest = (arr[indx].principal * arr[indx].time * rate )/100
			interestData.push({principal: arr[indx].principal,
		rate: rate, time: arr[indx].time, interest: interest})
		}
		else if (arr[indx].principal <= 2500 | arr[indx].time <= 1 ) {
			var rate = 2
			var interest = (arr[indx].principal * arr[indx].time * rate )/100
			interestData.push({principal: arr[indx].principal,
		rate: rate, time: arr[indx].time, interest: interest})
		}
		else {
			var rate = 1
			var interest = (arr[indx].principal * arr[indx].time * rate )/100
			interestData.push({principal: arr[indx].principal,
		rate: rate, time: arr[indx].time, interest: interest})
		}
		

	}
	console.log(interestData)
	return interestData
	
	
	
}
// for (key in data){
// 	console.log(data[key].principal)
// }
interestCalculator(data)