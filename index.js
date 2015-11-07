var request = require('request')
var nzor = require('newzealandorganismsregisterlib')
nzor.NamesController.getNamesGet({page: 1}, function(err,res){
	if(!err){
		console.log(res.names[0])
	}
})