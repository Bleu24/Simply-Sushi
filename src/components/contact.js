export default function Contact() {
    const div = document.getElementById('content');
    const p = document.createElement('p');
    div.appendChild(p);
    p.textContent = 'Contact';
    return div;
}