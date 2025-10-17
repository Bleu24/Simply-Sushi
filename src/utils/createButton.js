export default function createButton(name) {
    const button = document.createElement('button');
    button.innerHTML = name;
    return button;
}