# random-phrase-generator-js
A pure Javascript/ES6 random phrase generator that can use text documents as input

This is a lightweight javascript library designed to allow you to quickly create randomly generated phrases a la Cards Against Humanity or other combination-based groups of text, through provided text files on the back-end.
 
---
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
---

This script will allow you to create a sentence of the format: "A shapely spy with an unappealing tray", taking into account articles changing from a to an for vowels. Inputs need only be line-separated lists or arrays to create a fully randomized output, which is created by calling `generateRandom()`
