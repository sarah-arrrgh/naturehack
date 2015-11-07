var imgSearch = require ('google-images')
var http = require('http')
var Promise = require('bluebird')

var searcherAsync = Promise.promisify(searcher)

const PORT=8080

function handleRequest(request, response){
	searcherAsync("new zealand kaka")
	.then(response.end.bind(response))
}

function searcher(search, callback){
	imgSearch.search(search, function (err, images) {
		var imgUrl = (images[1]['unescapedUrl'])
		var imgTag = "<img src='"+imgUrl+"'>"
		callback(null,imgTag)
	})
}

var server = http.createServer(handleRequest)

server.listen(PORT, function(){
	console.log("Serving listening on: http://localhost:%s", PORT)
})