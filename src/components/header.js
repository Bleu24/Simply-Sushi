import Button from "../utils/createButton";
import logo from "../assets/img/logo.svg";

export default function Header() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const logoDiv = document.querySelector('.nav__logo');
    const btnDiv = document.createElement('div');
    const ctaDiv = document.createElement('div');
    
    btnDiv.classList.add('nav__btns');
    ctaDiv.classList.add('nav__cta');


    const homeBtn = Button("HOME");
    const mainBtn = Button("MENU");
    const aboutBtn = Button("ABOUT");
    const contactBtn = Button("CONTACT");
    const bookBtn = Button('RESERVATIONS →');
    const buttonList = [homeBtn, mainBtn, aboutBtn, contactBtn]

    for (const b of buttonList) {
        btnDiv.appendChild(b)
    }

    ctaDiv.appendChild(bookBtn)

    nav.appendChild(logoDiv);
    nav.appendChild(btnDiv);
    nav.appendChild(ctaDiv);

    header.appendChild(nav);


    return header;

}

