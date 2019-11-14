import Controller from '@ember/controller';

export default Controller.extend({
    categories: Object.freeze([
        'Apartment',
        'Townhouse',
        'Condo',
        'Estate'
    ]),

    actions: {
        selectCategory(value) {
            this.category = value;
        },

        setBedrooms(event) {
            if (event.key.match(/(?!\d)/g).length > 1 && event.keyCode !== 8) {
                event.preventDefault();
            } else {
                this.bedrooms += event.key;
            }
        },

        createRental() {
            const {
                title,
                owner,
                city,
                category,
                bedrooms,
                image,
                description
            } = this;

            const newRental = this.store.createRecord('rental', {
                title: title,
                owner: owner,
                city: city,
                category: category,
                bedrooms: bedrooms,
                image: image,
                description: description
            });

            newRental.save();
        }
    }
});
