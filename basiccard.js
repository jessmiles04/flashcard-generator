// BasicCard constructor 
// Based off a book instructions, create a front and back of card
exports.BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}

// ClozeCard constructor
// Full text and the cloze portion which is missing the answers.
exports.ClozeCard = function(text, cloze) {
	// Convert the incoming strings to lower case
	var textToLower = text.toLowerCase();
	var clozeToLower = cloze.toLowerCase();

	// Confirm that the cloze statement appears within the complete text
	if (!textToLower.includes(clozeToLower)) {
		console.log('Error' + cloze);
		return;
	}

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}