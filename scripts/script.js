window.onload = async function() {
	addArticle("A", "An"); //adds A/An at the beginning of the sentence
	await addRandomSourceFromDocument("docs/adjective.txt"); //loads in adjective and noun
	await addRandomSourceFromDocument("docs/noun.txt");
	addRandomSource("with"); //adds in a 'with' to chain the sentence
	addArticle("a", "an"); //adds a/an to chain the sentence
	await addRandomSourceFromDocument("docs/adjective.txt");
	await addRandomSourceFromDocument("docs/noun.txt");
	document.getElementById("random").innerHTML = generateRandom(); //sets the final text
}