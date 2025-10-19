import Button from "../utils/createButton";
import logo from "../assets/img/logo.svg";
import { animate, stagger } from "motion";

export default function Header() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const logoDiv = document.querySelector('.nav__logo');
    const btnDiv = document.createElement('div');
    const ctaDiv = document.createElement('div');

    btnDiv.classList.add('nav__btns');
    ctaDiv.classList.add('nav__cta');


    const homeBtn = Button("HOME");
    const menuBtn = Button("MENU");
    const aboutBtn = Button("ABOUT");
    const contactBtn = Button("CONTACT");
    const bookBtn = Button('RESERVATIONS →');
    const buttonList = [homeBtn, menuBtn, aboutBtn, contactBtn];

    for (const b of buttonList) {
        btnDiv.appendChild(b)
        b.classList.add('nav__btn');
    }

    homeBtn.dataset.tab = 'home';
    menuBtn.dataset.tab = 'menu';
    aboutBtn.dataset.tab = 'about';
    contactBtn.dataset.tab = 'contact';

    ctaDiv.appendChild(bookBtn);

    nav.appendChild(logoDiv);
    nav.appendChild(btnDiv);
    nav.appendChild(ctaDiv);

    header.appendChild(nav);


    return header;

}

