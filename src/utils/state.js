export const state = {
    tab: document.querySelector('#content'),

    get activeContent() {
        return document.querySelector('#content').dataset.tab;
    },

    set activeContent(tabName) {
        this.tab.dataset.tab = tabName;
    }

};