import { state } from "../utils/state";
import Uramaki from '../assets/img/uramaki.png';
import Nigiri from '../assets/img/uramaki.png';
import { MenuItem } from "../classes/MenuItem";
import createMenuItem from "../utils/createMenuItem";

export default function Menu() {
    const div = document.getElementById('content');

    // create menu elements
    const pageTitle = document.createElement('h1');
    
    // set classes
    pageTitle.classList.add('menu__title');

    // set texts
    pageTitle.textContent = 'Check our finest Sushis';

    //Sushi Data
    const sushis = [
        [Uramaki, 'Uramaki', 200, 'うらまき' ,'Sweet and Fragrant Uramaki'],
        

    ]

    div.appendChild(pageTitle);
    
    sushis.forEach(sushiInfo => {
        const sushi = new MenuItem(...sushiInfo);
        const item = createMenuItem(sushi);
        div.appendChild(item);
    });



    
}