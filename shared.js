const webLinks = [
	{
		tag: "a",
		text: "<img>",
		attr: "id", value: "logo",
		attr2: "href", value2: "/",
		attr3: "title", value3: "Головна сторінка"
	},
	{
		tag: "a",
		text: "Українськомовні моди для ігор Paradox",
		attr: "href", value: "/ut.html"
	},
	{
		tag: "a",
		text: "Що я створив",
		attr: "href", value: "/creations.html"
	}
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
	// {
	// 	tag: "button",
	// 	text: "✹",
	// 	attr: "class", value: "right noselect",
	// 	attr2: "title", value2: "Увімкнути світлу ѳему (налаштування не зберігається)",
	// 	attr3: "onclick", value3: "switchTheme()"
	// }
]

function generateLinks(x, y = 0) {
	const container = document.querySelector(x);
	for (var i = 0; i < webLinks.length; i++) {
		const webLink = document.createElement(webLinks[i].tag);
		webLink.setAttribute(webLinks[i].attr, webLinks[i].value);
		if (webLinks[i].attr2) { webLink.setAttribute(webLinks[i].attr2, webLinks[i].value2); }
		if (webLinks[i].attr3) { webLink.setAttribute(webLinks[i].attr3, webLinks[i].value3); }
		webLink.innerHTML = webLinks[i].text;
		container.insertBefore(webLink, container.children[i + y]);
	}
}

function switchTheme() { document.documentElement.classList.toggle("light"); }