(async () => {
	console.log("Hello, world!");
	const name = await prompt("This is a propmt", "Enter your name here");
	prompt(
		"Hello, " + name + "! This is another propmt",
		"But it is actually uselesss.",
	);
	console.warn(
		"Warning: prompt() functions must be called using await, otherwise it will not work as intented.",
	);
	prompt(
		"This is yet another propmt",
		"But you should not be able to see this.",
	);
	console.comment(
		"Inserting a prompt when one is already in use will throw an error.",
	);
	console.log("At the end of the timer below, the console will clear.");
	let timer = 30;
	const interval = setInterval(() => {
		if (timer < 30) {
			console.removeLast();
		}
		if (timer <= 0) {
			clearInterval(interval);
			setTimeout(() => {
				console.clear();
				console.log("And the console is cleared.");
				console.log(
					'To see this script, click <a href="./test.js">here</a>.',
				);
				console.log(
					'To use your own script, <a href=".">reload</a>.',
				);
			}, 1000);
		}
		console.comment(timer);
		timer--;
	}, 1000);
})();
