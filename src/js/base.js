class Base {
	constructor(content) {
		this._content = content
	}

	getButtons = () => {
		const buttons = this._navContainer.querySelectorAll('button');
		return buttons;
	}

	createNav = (header) => {
		const navContainer = document.createElement('div');
		navContainer.classList.add('nav-container');
		header.appendChild(navContainer);

		const homeTab = document.createElement('button');
		homeTab.classList.add('home-tab');
		homeTab.setAttribute('id', 'homeB')
		homeTab.textContent = 'HOME'
		navContainer.appendChild(homeTab);

		const menuTab = document.createElement('button');
		menuTab.classList.add('menu-tab');
		menuTab.setAttribute('id', 'menuB')
		menuTab.textContent = 'MENU'
		navContainer.appendChild(menuTab);

		const contactTab = document.createElement('button');
		contactTab.classList.add('contact-tab');
		contactTab.setAttribute('id', 'contactB')
		contactTab.textContent = 'CONTACT';
		navContainer.appendChild(contactTab);

		this._navContainer = navContainer
	}

	create = () => {
		const header = document.createElement('header');
		this._content.appendChild(header);

		const logoContainer = document.createElement('div');
		logoContainer.classList.add('logo-container');
		header.appendChild(logoContainer);

		const logo = document.createElement('p');
		logo.classList.add('logo');
		logo.textContent = 'STANLEY\'S';
		logoContainer.appendChild(logo);

		this.createNav(header);

	}

}

export default Base