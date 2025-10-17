/**
 * Creates a subdiv as an accompanying element for content.js only
 * 
 * @Parent div
 * @Children h3 and img
 * @returns HTMLNodeElement (Subdiv)
 */

export function createSubDiv(){
    const el = document.createElement('div');
    const h = document.createElement('h3');
    const img = new Image();
    const ja = document.createElement('h2');

    /**
     * Sets the class name using BEM methodology for the parent and its children
     * @param {string} blockName uses BEM naming convention
     */
    const setClassName = (blockName, modifier) => {

        if (!modifier) {
            el.classList.add(`${blockName}__subDiv`);
            h.classList.add(`${blockName}__subHeading`);
            img.classList.add(`${blockName}__subImg`);
            ja.classList.add(`${blockName}__ja`);
        } else if (typeof modifier === 'string') {
            el.classList.add(`${blockName}__subDiv--${modifier}`);
            h.classList.add(`${blockName}__subHeading--${modifier}`);
            img.classList.add(`${blockName}__subImg--${modifier}`);
            ja.classList.add(`${blockName}__ja--${modifier}`);
        }
        
    }

    const setHeadingInnerText = (value) => {
        h.innerHTML = value;
    }

    const setImgSrc = (src) => {
        img.src = src;
    }

    const setImgAlt = (alt) => {
        img.alt = alt;
    }

    const setJaText = (value) => {
        ja.innerHTML = value;
    }


    el.appendChild(ja);
    el.appendChild(img);
    el.appendChild(h);
    





    return { el, setClassName, setHeadingInnerText, setImgSrc, setImgAlt, setJaText };
}