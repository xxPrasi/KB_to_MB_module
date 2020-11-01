
/*First module creation
var log = { //var object log created

	info: function(info){ //key info, value has function (info) 
		console.log('Info has been updated' +info);
	}
}
module.exports = log*/ 

var memory = {

	bytes: function(bytes){
		let finalValue = ((bytes) /  1024).toPrecision(3);
		console.log("Memory converted from KB to MB is: " +finalValue);
	}

}
module.exports =  memory