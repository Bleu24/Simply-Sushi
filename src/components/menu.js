import { state } from "../utils/state";
import Uramaki from '../assets/img/uramaki.png';
import Nigiri from '../assets/img/nigiri.png';
import Maki from '../assets/img/maki.png';
import Temaki from '../assets/img/temaki.png';
import Sashimi from '../assets/img/sashimi.png'
import Chirashi from '../assets/img/chirashi.png';
import { MenuItem } from "../classes/MenuItem";
import createMenuItem from "../utils/createMenuItem";
import { animate, stagger, hover, scale } from "motion";

export default function Menu() {
    state.activeContent = 'menu';  
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
        [Temaki, 'Temaki', 199.00, 'てまき', 'Cone-shaped roll held in hand, filled with rice and toppings.'],
        [Sashimi, 'Sashimi', 249.00, 'さしみ', 'Thinly sliced raw fish or seafood, served without rice.'],
        [Chirashi, 'Chirashi', 299.00, 'ちらし', 'A bowl of sushi rice topped with assorted sashimi and garnishes.']
    ]

    div.appendChild(pageTitle);
    
    sushis.forEach(sushiInfo => {
        const sushi = new MenuItem(...sushiInfo);
        const item = createMenuItem(sushi);
        div.appendChild(item);
    });


    animate(".item__container", {opacity: 1}, {delay: stagger(0.1)});
    hover(".item__container", e => {
        animate(e, { scale: 1.05, borderColor: "#ff8b7b" }, {duration: 0.3});
        return () => animate(e, { scale: 1, borderColor: "#2E303E" }, {duration: 0.3});
    });

    
}