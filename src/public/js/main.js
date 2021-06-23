import cart from './CartComponent'
import products from './ProductComponent'
import filterEl from './FilterComp'
import error from './ErrorComp'
import shopScript from './script'
import slider from './slider'
import hover from './hover'

const app = new Vue({
    el: '#app',
    components: {
        shopScript,
        slider,
        hover,
        cart,
        products,
        error,
        'filter-el': filterEl
      },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    // console.log(error)
                    this.$refs.error.text = error;
                })
        },
        deleteJson(url, data){
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                     console.log(error)
                    this.$refs.error.text = error;
                })
        },


    },
    mounted(){
        shopScript();
        slider();
        hover();

    }

});

export default app

