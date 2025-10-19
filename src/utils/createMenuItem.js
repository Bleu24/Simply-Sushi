import { MenuItem } from "../classes/MenuItem";

/**
 * Creates a menu item for the menu page
 * @param {MenuItem} menuItem 
 * @returns {HTMLDivElement}
 */
export default function (menuItem) {
    //create elements
    const itemContainer = document.createElement('div');
    const itemImage = new Image();
    const itemHeading = document.createElement('h1');
    const itemPrice = document.createElement('h6');
    const itemDescription = document.createElement('p');
    const itemSubHeading = document.createElement('h3');
    const itemTitle = document.createElement('div');
    const itemBody = document.createElement('div');

    // setup metadata on item
    itemContainer.id = menuItem.id;
    itemContainer.classList.add('item__container', `${menuItem.itemName.toLowerCase()}`);
    itemHeading.classList.add('item__heading');
    itemPrice.classList.add('item__price');
    itemImage.classList.add('item__img');
    itemDescription.classList.add('item__desc');
    itemSubHeading.classList.add('item__subHeading');
    itemTitle.classList.add('item__title');
    itemBody.classList.add('item__body');
    

    // setup Content
    itemImage.src = menuItem.productImageURL;
    itemHeading.textContent = menuItem.itemName;
    itemPrice.textContent = `$${menuItem.price}`;
    itemDescription.textContent = menuItem.description;
    itemSubHeading.textContent = menuItem.subHeading;
    

    //assemble elements
    itemTitle.appendChild(itemHeading);
    itemTitle.appendChild(itemPrice);
    itemBody.appendChild(itemTitle);
    itemBody.appendChild(itemSubHeading);
    itemBody.appendChild(itemDescription);

    itemContainer.appendChild(itemImage);
    itemContainer.appendChild(itemBody);


    return itemContainer;
}
