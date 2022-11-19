const httpPattern =
	/http:\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
const httpsPattern =
	/https:\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
const input = document.getElementById("start-input");
input.focus();
input.addEventListener("keyup", function (e) {
	if (e.keyCode === 13) {
		input.disabled = true;
		let script;
		(async () => {
			if (
				httpPattern.test(input.value) || httpsPattern.test(input.value)
			) {
				const response = await fetch(input.value);
				const data = await response.text();
				script = data;
			} else {
				script = input.value;
			}
		})().then(() => {
			if (script != null) {
				document.querySelector("console").removeChild(
					document.querySelector("start"),
				);
				console.comment("Script injected<br>");
				eval(script);
			} else {
				console.error("Script injection failed.");
			}
		});
	}
});
