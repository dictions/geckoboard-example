var request = require('superagent');
var geckoboard = require('./config/geckoboard');

var postToWidget = function(data) {
	return request.post(geckoboard.apiUrl + geckoboard.widgetKey)
	.send({
		api_key: geckoboard.apiKey,
		data: data
	})
}

var textData = {
	item: []
}

process.argv.forEach(function (val, index, array) {
	if (index < 2) return;
	textData.item.push({
		text: val
	})
});

postToWidget(textData)
.end(function(err, res){
	if (err) return console.log(err);
	console.log('Successfully updated the widget.');
});

