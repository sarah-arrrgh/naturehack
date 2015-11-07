var nzor = require('newzealandorganismsregisterlib')
var names = nzor.NamesController
var matches = nzor.MatchesController
var stats = nzor.StatisticsController

names.getNamesGet({parentNameId: '000423b0-7771-4117-a33c-9075a6a6fa02'}, function(err,res){
	if(!err){
    for (var i =0;i<=9;i++){
		console.log(res.names[i].fullName)}
	}
})
// stats.getStatisticsGetByName('aves', function(err,res){
//   if(!err){
//     console.log(res)
//   }
// })

// names.getNamesGetByID('000423b0-7771-4117-a33c-9075a6a6fa02', function(err,res){
//   if(!err){
//     console.log(res)
//   }
// })

