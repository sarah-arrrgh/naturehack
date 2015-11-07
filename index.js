var nzor = require('newzealandorganismsregisterlib')
var names = nzor.NamesController

names.getNamesGetSearch({query: "Aves"}, function(err,res){
	if(!err){
		console.log("boo")
	}
})