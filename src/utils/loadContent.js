import Header from '../components/header.js';
import Home from '../components/home.js';
import Menu from '../components/menu.js';
import About from '../components/about.js';
import Contact from '../components/contact.js';
import { state } from './state.js';
import { removeChildren, setComponentState } from './componentFunctions.js';
import renderTab from './renderTab.js';

// Attack header event listener
Header().addEventListener('click', e => {
    const clickedBtn = e.target.closest('.nav__btn');
    const allBtns = document.querySelectorAll('.nav__btn');

    if (!clickedBtn) return;

    allBtns.forEach(b => {
        if (b === clickedBtn) {
            setComponentState(b, 'active');
            if (b.dataset.tab !== state.activeContent) removeChildren(state.tab);
            renderTab(b.dataset.tab);

        } else {
            b.removeAttribute('data-state');
        }
    });


});



export default function () {
    const savedTab = sessionStorage.getItem('tab');

    if (!savedTab) Home();
    else {
        switch (savedTab) {
            case 'home':
                Home();
                break;
            case 'menu':
                Menu();
                break;
            case 'about':
                About();
                break;
            case 'contact':
                Contact();
                break;
            default:
                break;
        }
    }


}

