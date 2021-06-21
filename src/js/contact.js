class Contact {
	createContact = () => {
		const contactContainer = document.createElement('div');
		contactContainer.classList.add('contact-container');

		const contactTitle = document.createElement('h1');
		contactTitle.classList.add('contact-title');
		contactTitle.innerHTML = 'CONTACT <span>US</span> AT';
		contactContainer.appendChild(contactTitle);

		const address = document.createElement('p');
		address.classList.add('description');
		address.innerHTML = 'contact@<span>stanley.com</span>';
		contactContainer.appendChild(address);

		return contactContainer;
	}
}

export default Contact