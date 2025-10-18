/**
 * Removes all children from the parent
 * @param {Node} parent 
 */
function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/**
 * 
 * @param {Node} element 
 * @param {String} value 
 */
function setComponentState(element, value) {
    element.dataset.state = value;
}

export { removeChildren, setComponentState };



