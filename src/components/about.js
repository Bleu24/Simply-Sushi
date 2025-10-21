import { state } from "../utils/state";
import { aboutBodyText } from "../misc";
import RestoURL from "../assets/img/resto.png";
import createAbout from "../utils/createAbout";

export default function About() {
    state.activeContent = 'about';
    const div = document.getElementById('content');

    const content = {
        cover: RestoURL,
        title: 'About Us',
        body: aboutBodyText
    };

    const aboutContent = createAbout(content);

    div.appendChild(aboutContent);
}