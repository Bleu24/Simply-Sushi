import sushiImg from '../assets/img/sushi.png';

export default function createImg() {
    const img = document.createElement('img');
    img.src = sushiImg;
    img.classList.add('sushi-hero');
    img.alt = 'A Sushi';
    return img;
}