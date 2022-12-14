// https://jsfiddle.net/jm4aLsdu/1/

const logger = document.querySelector("console");
const inputConstructor = (message, placeholder) => {
	if (typeof message == "object") {
		return "<pre-input>" + "<message>" +
			(JSON && JSON.stringify
				? JSON.stringify(message)
				: String(message)) +
			"</message>" +
			'<message class="input-arrow">> </message><input type="text" id="current-input" placeholder="' +
			placeholder + '"></pre-input>';
	}
	return "<pre-input>" + "<message>" + message + "</message>" +
		'<message class="input-arrow">> </message><input type="text" id="current-input" placeholder="' +
		placeholder + '"></pre-input>';
};
const scrollToBottom = () => {
	window.scrollTo(0, document.body.scrollHeight);
};
console.log = function (message, ...optionalParams) {
	let string = "";
	optionalParams.forEach((param) => {
		if (typeof param == "object") {
			string += " " +
				(JSON && JSON.stringify
					? JSON.stringify(param)
					: String(param));
		} else {
			string += " " + param;
		}
	});
	if (typeof message == "object") {
		logger.innerHTML += "<message>" +
			(JSON && JSON.stringify
				? JSON.stringify(message)
				: String(message)) +
			string + "<br /></message>";
	} else {
		logger.innerHTML += "<message>" + message + string + "<br /></message>";
	}
	scrollToBottom();
};
console.error = function (message, ...optionalParams) {
	let string = "";
	optionalParams.forEach((param) => {
		if (typeof param == "object") {
			string += " " +
				(JSON && JSON.stringify
					? JSON.stringify(param)
					: String(param));
		} else {
			string += " " + param;
		}
	});
	if (typeof message == "object") {
		logger.innerHTML += "<error>" +
			(JSON && JSON.stringify
				? JSON.stringify(message)
				: String(message)) +
			string + "</error><br />";
	} else {
		logger.innerHTML += "<error>" + message + string + "<br /></error>";
	}
	scrollToBottom();
};
console.warn = function (message, ...optionalParams) {
	let string = "";
	optionalParams.forEach((param) => {
		if (typeof param == "object") {
			string += " " +
				(JSON && JSON.stringify
					? JSON.stringify(param)
					: String(param));
		} else {
			string += " " + param;
		}
	});
	if (typeof message == "object") {
		logger.innerHTML += "<warn>" +
			(JSON && JSON.stringify
				? JSON.stringify(message)
				: String(message)) +
			string + "</warn><br />";
	} else {
		logger.innerHTML += "<warn>" + message + string + "<br /></warn>";
	}
	scrollToBottom();
};
console.comment = function (message, ...optionalParams) {
	let string = "";
	optionalParams.forEach((param) => {
		if (typeof param == "object") {
			string += " " +
				(JSON && JSON.stringify
					? JSON.stringify(param)
					: String(param));
		} else {
			string += " " + param;
		}
	});
	if (typeof message == "object") {
		logger.innerHTML += "<comment>" +
			(JSON && JSON.stringify
				? JSON.stringify(message)
				: String(message)) +
			string + "<br /></comment>";
	} else {
		logger.innerHTML += "<comment>" + message + string + "<br /></comment>";
	}
	scrollToBottom();
};
console.clear = function () {
	logger.innerHTML = "";
};
console.removeLast = function () {
	logger.removeChild(logger.lastChild);
};
// deno-lint-ignore no-global-assign
prompt = async function (message = "", placeholder = "") {
	if (document.getElementById("current-input") == null) {
		logger.innerHTML += inputConstructor(message, placeholder);
		scrollToBottom();
		const input = document.getElementById("current-input");
		input.focus();
		const waitForEnter = () => {
			return new Promise((resolve) => {
				input.addEventListener("keyup", onKeyHandler);
				function onKeyHandler(e) {
					if (e.keyCode == 13) {
						document.removeEventListener("keyup", onKeyHandler);
						resolve();
					}
				}
			});
		};
		await waitForEnter();
		const entered = input.value;
		const wrapper = document.querySelectorAll(
			"pre-input",
		)[document.querySelectorAll("pre-input").length - 1];
		wrapper.innerHTML += "<message>" + entered + "</message>";
		wrapper.removeChild(document.getElementById("current-input"));
		return entered;
	} else {
		console.error(
			"Error: prompt() is not supported in this environment. Another prompt() is already active. Please call all prompt() functions with await.",
		);
	}
};
