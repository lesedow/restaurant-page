class Menu {
	createMenu = () => {
		const menuContainer = document.createElement('div');
		menuContainer.classList.add('menu-container');

		const test = document.createElement('h1');
		test.textContent = 'TEST'
		menuContainer.appendChild(test);

		return menuContainer;
	}
}

export default Menu