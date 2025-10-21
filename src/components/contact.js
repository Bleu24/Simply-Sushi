import { state } from "../utils/state";
import createForm from "../utils/createForm";
import { animate, stagger } from "motion";

export default function Contact() {
    state.activeContent = 'contact';  
    const div = document.getElementById('content');
    
    const form = createForm();

    form.classList.add('form');
    
    div.appendChild(form);
    const inputs = document.querySelectorAll('input');
    inputs.forEach(i => i.setAttribute('required', 'true'));
    animate(form.childNodes, {opacity: 1}, {delay: stagger(0.1)} );
    return div;
}