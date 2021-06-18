class Home {
	createHome = () => {
		const homeContainer = document.createElement('div');
		homeContainer.classList.add('home-container');

		const mainQuote = document.createElement('h1');
		mainQuote.classList.add('main-quote');
		mainQuote.innerHTML = 'CREATE YOUR <span>TASTE</span>';
		homeContainer.appendChild(mainQuote);

		const description = document.createElement('p');
		description.classList.add('description');
		description.textContent = 'Here at Stanley\'s you get to taste the best food';
		homeContainer.appendChild(description);

		const checkMenu = document.createElement('p');
		checkMenu.classList.add('check-menu');
		checkMenu.textContent = 'Check our menu for more';
		homeContainer.appendChild(checkMenu);

		return homeContainer;
	}
}

export default Home