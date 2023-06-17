const app = Vue.createApp({
  data(){
    return{
        order:0,
        products:[
            {
                name:'Milk',
                quantity:10,
                price:'40uah'
            },
            {
                name:'Bread',
                quantity:5,
                price:'24uah'
            },
            {
                name:'Candy',
                quantity:50,
                price:'20uah'
            },
            {
                name:'Cola',
                quantity:3,
                price:'18uah'
            }
        ]
    }
  },
  methods: {
    buyProduct(product){
        if(product.quantity > 0){
            product.quantity--
            this.order++
        }
    }
  },
  computed:{}

  
});


app.mount('#app');
