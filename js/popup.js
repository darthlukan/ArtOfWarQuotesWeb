/*
 * @author Brian Tomlinson <darthlukan@gmail.com>
 * @description Meat and potatoes
 */

var app = {
	
	quotes: '',
	quote: '',
	randint: '',
	
	/*
	 * @returns this.quotes (Array Object)
	 */
	getQuotes: function () {
		// Using XHR as it's simpler to implement than AJAX.
		var xhr = new XMLHttpRequest();
	
		// Grab the file containing our text
		xhr.open('GET', 'quotes.txt', false);
	
		// null here means we're using synchronous, not asynchronous calls.
		xhr.send(null);
	
		// Quotes are separated by double newlines in our text document.	
		this.quotes = xhr.responseText.split('\n\n');
	
		return this.quotes;
	},
	
	/*
	 * Bases the random integer range
	 * on the length of the array that we're using.
	 * 
	 * @returns this.randint (integer)
	 */
	randomize: function () {
	
		this.randint = Math.floor(Math.random() * this.quotes.length);
	
		return this.randint;
	},
	
	/*
	 * Set the title and randomly choose a quote for display.
	 * 
	 * @returns this.quote (string)
	 */
	showQuotes: function () {
	
		this.getQuotes();
	
		this.quote = this.quotes[this.randomize()];
		
		// Clear out the html of these two divs
		$('#quotesH').empty();
		$('#quotesC').empty();
		
		// Without reloading the page, add this to the two divs.
		$('#quotesH').append("<h1>Quotes from 'The Art Of War':</h1><br />");
		$('#quotesC').append('<p>' + this.quote + '</p>');
	
		return this.quote;
	}
}