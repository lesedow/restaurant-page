import Base from './base'
import Home from './home'
import Menu from './menu'
import Contact from './contact'
import '../css/styles.css'

let prevPage;
const content = document.getElementById('content');

function setMainContent(button) {
	// Remove the previous page
	content.removeChild(prevPage);

	switch (button.id) {
		case 'homeB':
			const home = new Home().createHome();
			content.appendChild(home);
			prevPage = home;
			break;
		case 'menuB':
			const menu = new Menu().createMenu();
			content.appendChild(menu);
			prevPage = menu;
			break;
		case 'contactB':
			const contact  = new Contact().createContact();
			content.appendChild(contact);
			prevPage = contact;
			break;
	}

}

function main() {
	// Getting the content div
	const loadWebsite = new Base(content);

	loadWebsite.create();

	// Getting the main div
	const mainDiv = content.querySelector('main-content');
	// Creating the default page
	const homePage = new Home().createHome();
	content.appendChild(homePage);
	prevPage = homePage;

	// Getting the buttons from the nav-bar
	const buttons = loadWebsite.getButtons();

	// Checking if any button is clicked
	buttons.forEach(button => {
		button.addEventListener('click', () => {
			setMainContent(button);
		})
	})

}

main()