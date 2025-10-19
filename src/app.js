import './styles.css';
import './styles/menu.css';
import 'normalize.css';
import Header from './components/header.js';
import Home from './components/home.js';
import Menu from './components/menu.js';
import { state } from './utils/state.js';
import { removeChildren, setComponentState } from './utils/componentFunctions.js';
import renderTab from './utils/renderTab.js';
import { animate, stagger } from 'motion';

Menu();



Header().addEventListener('click', e => {
    const clickedBtn = e.target.closest('.nav__btn');
    const allBtns = document.querySelectorAll('.nav__btn');

    if (!clickedBtn) return;

    allBtns.forEach(b => {
        if (b === clickedBtn) {
            setComponentState(b, 'active');
            removeChildren(state.tab);
            renderTab(b.dataset.tab);

        } else {
            b.removeAttribute('data-state');
        }
    });


});


