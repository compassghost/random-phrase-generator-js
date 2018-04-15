//Random Phrase Generator

//Bucket for all the random phrases
var randomSource = [];

//Bucket for all created sources so you don't have to re-fetch data
var createdSources = {};

//Generates the sentence
function generateRandom() {
	var buffer = [];
	var isArticle = [];
	for(var i = 0; i < randomSource.length; i++) {
		var source = randomSource[i];
		
		//pick a random element from a list
		if(Array.isArray(source)) {
			var index = Math.floor(Math.random() * source.length);
			buffer.push(source[index]);
			isArticle.push(false);
		}
		else if(source['isArticle']) {
			buffer.push(source['article']);
			isArticle.push(true);
		}
		else {
			buffer.push(source);
			isArticle.push(false);
		}
		if(i > 0 && isArticle[i-1] && isVowel(source[index].toLowerCase().charAt(0))) {
			buffer[i-1] = randomSource[i-1]['alternate'];
		}
	}
	output = "";
	
	for(var i = 0; i < buffer.length; i++) {
		output += " " + buffer[i] + " ";
	}
	
	return output.trim();
}

function isVowel(char)
{
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false;
}

//Add a text source. Takes any single value or an array of values.
function addRandomSource(source) {
	randomSource.push(source);
}

function addArticle(article, alternate) {
	var source = {isArticle: true, article: article, alternate: alternate};
	
	randomSource.push(source);
}

//Add a text source from a document, no delimiters, one option per line
async function addRandomSourceFromDocument(url) {
	return new Promise(function (resolve, reject) {
		if(createdSources[url] == null) {
			var request = new XMLHttpRequest();
			request.open('GET', url);
			request.responseType = 'text';
			var data;
			request.onload = function() {
				var source = request.response.split("\n");
				source = source.filter(function(n){ return n != undefined });
				createdSources[url]=source;
				addRandomSource(source);
				resolve();
			};
			request.send(null);
		}
		else {
			addRandomSource(createdSources[url]);
			resolve();
		}
	});
}