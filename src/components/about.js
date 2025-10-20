import { state } from "../utils/state";
import { aboutBodyText } from "../misc";

export default function About() {
    state.activeContent = 'about';
    const div = document.getElementById('content');

    const content = {
        heroPhoto: "Not Specified",
        title: 'About Us',
        body: aboutBodyText
    };

}