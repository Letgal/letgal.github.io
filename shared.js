const headerButtons = [
	{ text: "<img>", link: "/" },
	{ text: "Переклади ігор Paradox", link: "/ut.html" },
	{ text: "Новини Hearts of Iron IV", link: "/hoi4-news" },
	{ text: "Підтримати аўтора", link: "https://send.monobank.ua/jar/2hW6s9nEeY" }
]

function generateHeader() {
	const header = document.querySelector("header");
	for (var i = 0; i < headerButtons.length; i++) {
		const headerButton = document.createElement("a");
		headerButton.setAttribute("href", headerButtons[i].link);
		headerButton.innerHTML = headerButtons[i].text;
		header.insertBefore(headerButton, header.children[i + 0]);
	}
}