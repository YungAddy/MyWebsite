console.log(
	"%cIf you used Developer Tools to find this then follow me on Instagram! @yungaddydev",
	'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
let theme = localStorage.getItem("theme");

if (theme == null) {
	setTheme("light");
} else {
	setTheme(theme);
}
// if (condition)
// block of code to be executed if the condition is true
// else: block of code to be executed if the condition is false
// "if not this then that"

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener("click", function () {
		let mode = this.dataset.mode;
		console.log("Option clicked:", mode);
		setTheme(mode);
	});
}

function setTheme(mode) {
	if (mode == "light") {
		document.getElementById("theme-style").href = "default.css";
	}

	if (mode == "crimson") {
		document.getElementById("theme-style").href = "crimson.css";
	}

	if (mode == "purple") {
		document.getElementById("theme-style").href = "purple.css";
	}

	if (mode == "dark") {
		document.getElementById("theme-style").href = "darkmode.css";
	}

	localStorage.setItem("theme", mode);
	// Cache
}
