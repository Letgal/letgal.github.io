const headerButtons = [
	{
		tag: "a",
		text: "<img>",
		attr: "id", value: "logo",
		attr2: "href", value2: "/",
		attr3: "title", value3: "Головна сторінка"
	},
	{
		tag: "a",
		text: "Українські моди до ігор Paradox",
		attr: "href", value: "/ut.html"
	},
	// {
	// 	tag: "a",
	// 	text: "Переклади модів Skyrim",
	// 	attr: "href", value: "/ut-skyrim.html"
	// },
	// {
	// 	tag: "a",
	// 	text: "Транскрибування",
	// 	attr: "href", value: "/transcript.html"
	// },
	// {
	// 	tag: "a",
	// 	text: "Новини Hearts of Iron IV",
	// 	attr: "href", value: "/hoi4-news"
	// },
	// {
	// 	tag: "a",
	// 	text: "Підтримати автора",
	// 	attr: "class", value: "right",
	// 	attr2: "href", value2: "https://send.monobank.ua/jar/2hW6s9nEeY",
	// 	attr3: "target", value3: "_blank"
	// },
	{
		tag: "button",
		text: "✹",
		attr: "class", value: "right noselect",
		attr2: "title", value2: "Увімкнути світлу ѳему (налаштування не зберігається)",
		attr3: "onclick", value3: "switchTheme()"
	}
]

function generateHeader() {
	const header = document.querySelector("header");
	for (var i = 0; i < headerButtons.length; i++) {
		const headerButton = document.createElement(headerButtons[i].tag);
		headerButton.setAttribute(headerButtons[i].attr, headerButtons[i].value);
		if (headerButtons[i].attr2) { headerButton.setAttribute(headerButtons[i].attr2, headerButtons[i].value2); }
		if (headerButtons[i].attr3) { headerButton.setAttribute(headerButtons[i].attr3, headerButtons[i].value3); }
		headerButton.innerHTML = headerButtons[i].text;
		header.insertBefore(headerButton, header.children[i]);
	}
}

function switchTheme() { document.documentElement.classList.toggle("light"); }