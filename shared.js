const headerButtons = [
	{
		tag: "a",
		text: "<img>",
		attr: "href", value: "/"
	},
	{
		tag: "a",
		text: "Укр. переклади ігор Paradox",
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
	{
		tag: "a",
		text: "Підтримати автора",
		attr: "href", value: "https://send.monobank.ua/jar/2hW6s9nEeY",
		attr2: "target", value2: "_blank"
	},
	{
		tag: "label",
		text: "<input type='checkbox' onchange='switchTheme()'>✹",
		attr: "class", value: "align noselect",
		attr2: "title", value2: "Увімкнути світлу ѳему (налаштування не зберігається)"
	}
]

function generateHeader() {
	const header = document.querySelector("header");
	for (var i = 0; i < headerButtons.length; i++) {
		const headerButton = document.createElement(headerButtons[i].tag);
		headerButton.setAttribute(headerButtons[i].attr, headerButtons[i].value);
		if (headerButtons[i].attr2) { headerButton.setAttribute(headerButtons[i].attr2, headerButtons[i].value2); }
		headerButton.innerHTML = headerButtons[i].text;
		header.insertBefore(headerButton, header.children[i]);
	}
}

function switchTheme() { document.documentElement.classList.toggle("light"); }