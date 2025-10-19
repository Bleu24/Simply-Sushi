export class MenuItem {
    id = crypto.randomUUID();
    productImageURL = 'Not Specified';
    itemName = 'Not Specified';
    price = 0;
    description = 'Not Specified';
    subHeading ='Not Specified'

    constructor(productImageURL, itemName, price, subHeading, description) {
        this.productImageURL = productImageURL;
        this.itemName = itemName;
        this.price = price;
        this.subHeading = subHeading;
        this.description = description;
    }
    get productImageURL() {
        return this.productImageURL;
    }

    get itemName() {
        return this.itemName;
    }

    get price() {
        return this.price;
    }

    get description() {
        return this.description;
    }

    set productImageURL(url) {
        this.productImageURL = url;
    }

    set price(price) {
        this.price = price;
    }

    set description(desc) {
        this.description = desc;
    }
}