const cartItem = {
    props: ['img', 'cartItem'],
    template: `
    <div class="cart-item">
      <div class="card__mango product-bio">
          <button class="del-btn" @click="$emit('remove', cartItem)"><img class="clouse__image" src="img/cardclouse.svg" alt="menu"></button>
          <div class="mango__img">
          <img class="mango__image" :src="cartItem.img_src" alt="card">
          </div>
          <div class="mango__text">
          <h4 class="mango__headline product-title">{{ cartItem.product_name }}</h4>
          <p class="mango__price product-single-price">Price: <span class="mango__number">$ {{ cartItem.price }} each</span>	</p>
          <p class="mango__color">Color: <span class="mango__red">Red</span></p>
          <p class="mango__size">Size: <span class="mango__xl">Xl</span>	</p>
          <p class="mango__quantity product-quantity">Quantity: <span class="quantity__number">{{ cartItem.quantity }}</span>	</p>
          <p class="mango__price product-single-price">
            Total price:<span class="mango__number product-price">$ {{cartItem.quantity*cartItem.price}}</span>
          </p>
          </div>
      </div>
      <div class="right-block">
          
      </div>
      
    </div>
    `
};
const cart = {
    data(){
      return {
          imgCart: 'https://placehold.it/50x100',
          cartUrl: '/getBasket.json',
          cartItems: [],
          showCart: false,
      }
    },
    components: {
      'cart-item': cartItem
    },
    methods: {
        addProduct(item){
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result === 1){
                            find.quantity++
                        }
                    })
            } else {
                const prod = Object.assign({quantity: 1}, item);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result === 1){
                            this.cartItems.push(prod)
                        }
                    })
            }
            
        },
        remove(item){

            let find = this.cartItems.find(el => el.id_product === item.id_product);
                if(find){
                    this.$parent.deleteJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result === 1){
                            find.quantity--
                        }
                    })
                    if(item.quantity <= 1){
                        this.cartItems.splice(this.cartItems.indexOf(item), 1);
                    }
                } else {
                    alert("Not found!");
                }
        },
    },
    mounted(){
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },
    template: `<div class="card__info w-100 p-0">
                <button @click="showCart = !showCart" class="header__nav--button header__nav--none btn-cart">
                    <img src="img/buy.png" alt="user">
                </button>
                <div class="cart-block" v-show="showCart">
                    <cart-item v-for="(item, i) of cartItems" :key="i" :img="imgCart" :cart-item="item" @remove="remove">
                    </cart-item>
                </div>
            </div>
        `
};

export default cart

//let obj = new WebSocket("ws://localhost")
