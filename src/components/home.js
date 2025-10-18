import sushiImg from '../assets/img/sushi.png';
import sushiPlateImg from '../assets/img/sushiplate.png';
import noriImg from '../assets/img/nori.png'
import createSubDiv  from '../utils/createSubDiv';

export default function Home() {
    const content = document.getElementById('content');
    const heroDiv = document.createElement('div');
    const h = document.createElement('h1');
    const heroImg = new Image();
    const nigiriDiv = document.createElement('div');
    const subDivObj = createSubDiv();
    const subDivObj2 = createSubDiv();

    heroImg.src = sushiImg;
    subDivObj.setImgSrc(sushiPlateImg);
    subDivObj2.setImgSrc(noriImg);
    heroDiv.classList.add('content__hero');
    h.classList.add('content__heading');
    heroImg.classList.add('content__heroImg');
    nigiriDiv.classList.add('content__nigiri');
    subDivObj.setClassName('content');
    subDivObj2.setClassName('content', 'nori');

    subDivObj.setJaText('海の恵み');
    subDivObj.setImgAlt('Collection of sushi on a plate.')
    subDivObj.setHeadingInnerText('Premium Sushi. <br> Made with Precision.');

    subDivObj2.setJaText('こだわりの海苔で包む味');
    subDivObj2.setImgAlt('Nori on a basket');
    subDivObj2.setHeadingInnerText('Flavor Wrapped in Carefully Selected Nori');


    heroImg.alt = 'An image of a sushi'
    h.innerText = 'Simplicity in Form. Perfection in Flavor.';


    heroDiv.appendChild(h);
    content.appendChild(heroDiv);
    content.appendChild(heroImg);
    content.appendChild(subDivObj.el);
    content.appendChild(subDivObj2.el);

    content.dataset.tab = 'home';
    content.dataset.state = 'active';
    return content;
}