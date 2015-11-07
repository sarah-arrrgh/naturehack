

var client = require ('google-images')


client.search( 'kaka', function (err, images) {
    console.log(images[0]['unescapedUrl'])
});