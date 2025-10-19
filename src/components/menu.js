import { state } from "../utils/state";
import Uramaki from '../assets/img/uramaki.png';
import Nigiri from '../assets/img/nigiri.png';
import Maki from '../assets/img/maki.png';
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
        [Uramaki, 'Uramaki', 149.00, 'うらまき' ,'Rice on the outside, nori on the inside.'],
        [Nigiri, 'Nigiri', 149.00, 'にぎり', 'A slice of fish atop a small bed of rice.'],
        [Maki, 'Maki', 149.00, 'まきずし', 'Rice and fillings wrapped in nori (seaweed), sliced into bite-sized rolls.'],

        

    ]

    div.appendChild(pageTitle);
    
    sushis.forEach(sushiInfo => {
        const sushi = new MenuItem(...sushiInfo);
        const item = createMenuItem(sushi);
        div.appendChild(item);
    });



    
}