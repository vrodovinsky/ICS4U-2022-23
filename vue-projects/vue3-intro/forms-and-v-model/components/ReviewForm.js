app.component('review-form', {
    template:
        /*html*/
        `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
    
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>

        <label for="question">Would you recommend this product?</label>      
        <textarea id="question" v-model="question"></textarea>
    
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
        </select>
    
        <input class="button" type="submit" value="Submit">  
  </form>`,
    data() {
        return {
            name: '',
            review: '',
            question: '',
            rating: null
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.question === '' || this.rating === null) {
                alert('Review is incomplete. Please fill out every field.')
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                question: this.question,
                rating: this.rating,
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.question = ''
            this.rating = null
        }
    }
})
