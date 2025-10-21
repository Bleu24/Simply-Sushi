import { state } from "../utils/state";
import { aboutBodyText } from "../misc";
import RestoURL from "../assets/img/resto.png";
import createAbout from "../utils/createAbout";
import { animate, stagger } from "motion";

export default function About() {
    state.activeContent = 'about';
    const div = document.getElementById('content');

    const content = {
        cover: RestoURL,
        title: 'About Us',
        body: aboutBodyText
    };

    const aboutContent = createAbout(content);

    animate(aboutContent.childNodes, {opacity: 1}, {delay: stagger(0.1)} );
    div.appendChild(aboutContent);
}