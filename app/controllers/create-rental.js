import Controller from '@ember/controller';

export default Controller.extend({
    categories: Object.freeze([
        'Apartment',
        'Townhouse',
        'Condo',
        'Estate'
    ]),

    actions: {
        selectCategory(event) {
            this.category = event.target.value;
        },

        setBedrooms(event) {
            const ALLOWED_KEYS = [
                8, 9, 13, 37, 39, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123
            ];

            const isDigit = event.key.match(/(?!\d)/g).length <= 1;
            const isAllowed = ALLOWED_KEYS.includes(event.keyCode);

            if (!isDigit && !isAllowed) {
                event.preventDefault();
            } else if (isDigit) {
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

            this.store.createRecord('rental', {
                title: title,
                owner: owner,
                city: city,
                category: category,
                bedrooms: bedrooms,
                image: image,
                description: description
            }).save().then(() => {
                // By executing the transition in the "then" function we wait for the store to finish creating a record.
                // If we don't do this, we will see duplicate data on the rentals overview
                this.transitionToRoute('rentals');
            });

        }
    }
});
