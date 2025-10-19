import { state } from "../utils/state";

export default function Contact() {
    state.activeContent = 'contact';  
    const div = document.getElementById('content');
    const p = document.createElement('p');
    div.appendChild(p);
    p.textContent = 'Contact';
    return div;
}