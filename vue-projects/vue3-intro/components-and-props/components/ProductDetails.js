app.component(
    'product-details', {
    props: {
        details: {
            type: Array,
            required: true,
        }
    },
    template:
        /*html*/
        `<ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>`,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
    },
    computed: {
    }
})