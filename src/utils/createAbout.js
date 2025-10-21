export default function (content) {
    // Create elements
    const div = document.createElement('div');
    const pageTitle = document.createElement('h1');
    const img = new Image();
    const text = document.createElement('p');
    const body = document.createElement('div');

    // Set up class names
    div.classList.add('about__container');
    pageTitle.classList.add('about__title');
    img.classList.add('about__cover');
    text.classList.add('about__text');
    body.classList.add('about__body');

    // Set up content
    pageTitle.textContent = content.title;
    img.src = content.cover;
    text.innerHTML = content.body;

    // Assemble elements
    body.appendChild(pageTitle)
    body.appendChild(text);
    div.appendChild(img);
    div.appendChild(body);

    return div;
}