import { state } from "../utils/state";

export default function About() {
    const div = document.getElementById('content');
    const p = document.createElement('p');
    div.appendChild(p);
    p.textContent = 'About';
    console.log(state.activeContent);
    return div;
    
}