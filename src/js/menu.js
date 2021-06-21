import Capriciosa from '../images/capriciosa.jpg'
import Carbonara from '../images/carbonara.jpg'
import Diavola from '../images/diavola.jpg'
import Hawaiian from '../images/hawaiian.jpg'
import Margherita from '../images/margherita.jpg'
import Pepperoni from '../images/pepperoni.jpeg'
import Prosciutto from '../images/prosciutto.jpg'
import QuattroStag from '../images/quadro-stagioni.jpeg'
import QuattroForm from '../images/quattro-formaggi.jpg'

class Menu {
	createPizza = (image) => {
		const pizzaImage = new Image();
		pizzaImage.src = image;

		return pizzaImage
	}

	createMenu = () => {
		const menuContainer = document.createElement('div');
		menuContainer.classList.add('menu-container');

		const title = document.createElement('h1');
		title.textContent = 'MENU';
		title.classList.add('menu-title');
		menuContainer.appendChild(title);

		const description = document.createElement('p');
		description.textContent = "These are only a few from our variety of pizzas";
		description.classList.add("menu-description");
		menuContainer.appendChild(description);

		const menuGrid = document.createElement('div');
		menuGrid.classList.add('menu-grid');
		menuContainer.appendChild(menuGrid);

		menuGrid.appendChild(this.createPizza(Capriciosa));
		menuGrid.appendChild(this.createPizza(Carbonara));
		menuGrid.appendChild(this.createPizza(Diavola));
		menuGrid.appendChild(this.createPizza(Hawaiian));
		menuGrid.appendChild(this.createPizza(Margherita));
		menuGrid.appendChild(this.createPizza(Pepperoni));
		menuGrid.appendChild(this.createPizza(Prosciutto));
		menuGrid.appendChild(this.createPizza(QuattroStag));
		menuGrid.appendChild(this.createPizza(QuattroForm));

		return menuContainer;

	}
}

export default Menu