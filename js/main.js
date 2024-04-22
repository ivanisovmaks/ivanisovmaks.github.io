var app = new Vue({
    el: "#tomato_all-main",
    data:{
        products:[
            {id:1,title:"Grape Vine",short_text:"Grape very delicious",image:'images/Grape Vine.jpg',
            desc:{
                plant:{p1:"Grape have a strong sweet taste.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Shelf life of the plant is 2.5-3 months.",
                       f2:"Nice shiny attractive deep purple color.",
                       f3:"Average fruit size: 0.5кг."},
                cycle:{spring:"Spring",summer:"Summer"},
                color:"Purple"
            }},
            {id:2,title:"Grape Vine soft",short_text:"Grape very delicious",image:'images/Grape Vine1.jpg',
            desc:{
                plant:{p1:"Grape have a strong sweet taste.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Shelf life of the plant is 2.5-3 months.",
                       f2:"Nice shiny attractive deep purple color.",
                       f3:"Average fruit size: 0.5кг."},
                cycle:{spring:"Spring",summer:"Summer"},
                color:"Purple"
            }},
            {id:3,title:"Grape",short_text:"Grape very delicious",image:'images/Grape1.jpg',
            desc:{
                plant:{p1:"Grape have a strong sweet taste.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Shelf life of the plant is 2.5-3 months.",
                       f2:"Nice shiny attractive deep green color.",
                       f3:"Average fruit size: 1кг."},
                cycle:{spring:"Spring",summer:"Summer"},
                color:"Green"
            }},
            {id:4,title:"Shiraz-Grape",short_text:"Grape very delicious",image:'images/Shiraz-Grape.jpg',
            desc:{
                plant:{p1:"Shiraz-Grape have a strong sweet taste.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Shelf life of the plant is 2.5-3 months.",
                       f2:"Nice shiny attractive deep blue color.",
                       f3:"Average fruit size: 1кг."},
                cycle:{spring:"Spring",summer:"Summer"},
                color:"Blue"
            }},
            {id:5,title:"Black_grape",short_text:"Grape very delicious",image:'images/black_grape.jpg',
            desc:{
                plant:{p1:"Black_grape have a strong sweet taste.",
                       p2:"Very high productivity with good fruit setting.",
                       p3:"Early matured variety."},
                fruit:{f1:"Shelf life of the plant is 2.5-3 months.",
                       f2:"Nice shiny attractive deep blue color.",
                       f3:"Average fruit size: 1кг."},
                cycle:{spring:"Spring",summer:"Summer"},
                color:"Blue"
            }}
        ],
        product:[],
        btnVisible: 0
    },
    mounted:function(){
        this.getProduct();
        this.checkInCart();
    },
    methods:{
        getProduct:function(){
            if(window.location.hash){
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length>0){
                    for(i in this.products){
                        if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                    }
                }
            }
        },
        addToCart:function(id){
            var cart = [];
            if(window.localStorage.getItem('cart')){
                cart=window.localStorage.getItem('cart').split(',');
            }

            if(cart.indexOf(String(id))==-1){
                cart.push(id);
                window.localStorage.setItem('cart',cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
        }
    },
});
