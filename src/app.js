import './styles.css';
import 'normalize.css';
import Header from './components/header.js';
import Home from './components/home.js';
import { state } from './utils/state.js';
import { removeChildren, setComponentState } from './utils/componentFunctions.js';
import renderTab from './utils/renderTab.js';

Home();



Header().addEventListener('click', e => {
    const clickedBtn = e.target.closest('.nav__btn');
    const allBtns = document.querySelectorAll('.nav__btn');

    if (!clickedBtn) return;

    allBtns.forEach(b => {
        if (b === clickedBtn) {
            if (b.dataset.tab === state.activeContent) return;
            else {
                setComponentState(b, 'active');
                removeChildren(state.tab);
                renderTab(b.dataset.tab);
            }
        } else {
            b.removeAttribute('data-state');
        }
    });


});