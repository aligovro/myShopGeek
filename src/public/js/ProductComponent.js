const product = {
    props: ['product', 'img'],
    template: `
            <div class="fetured__products--oneline">
                <div class="fetured__products--one">
                <div class="fetured__image--style">
                    <img :src="img" class="products__one--image" alt="products">
                    <div class="fetured__link--store">
                    <button class="buy-btn link__store" @click="$emit('add-product', product)">
                        <img class="link__store--image" src="img/buy.svg" alt="">
                        Купить
                    </button>
                    </div>
                </div>

                <div class="fetured__text">
                    <p class="products__one--headline">{{product.product_name}}</p>
                    <p class="products__one--text">Known for her sculptural takes on traditional tailoring, Australian
                    arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
                    <p class="products__one--price">{{product.price}}</p>
                </div>
                </div>
            </div>
    `
};

const products = {
    data(){
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
            imgProduct: 'https://placehold.it/200x150',
        }
    },
    components: {
        product
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `<div class="fetured__products">
                <product v-for="(item, num) of filtered" 
                :key="item.id_product" 
                :img="item.img_src"
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"></product>
               </div>`
};

export default products
