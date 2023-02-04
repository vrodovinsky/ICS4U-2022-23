const app = Vue.createApp({
   data() {
      return {
         cart: [],
         premium: true
      }
   },
   methods: {
      updateCart(id) {
         this.cart.push(id)
      },
      removeFromCart(id) {
         const i = this.cart.indexOf(id)
         if (i < 0)
            return
         this.cart.splice(i, 1)
      },
   }
})