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
        cart:[],
        contactFields:[{
            name: "",
            companyName: "",
            position: "",
            city: "",
            country: "",
            telephone: "",
            email: "",
            youAre: "",
            otherSpecify: "",
			areaa: "",
            capcha: ""
        }],
        btnVisible: 0,
        cartVisible:0,
        formSubmitted: false,
        formVisible: 1
    },
    mounted:function(){
        this.getProduct();
        this.checkInCart();
        this.getCart();
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
            if(window.localStorage.getItem('cart')){
                this.cart=window.localStorage.getItem('cart').split(',');
            }

            if(this.cart.indexOf(String(id))==-1){
                this.cart.push(id);
                window.localStorage.setItem('cart',this.cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function(){
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
            if (window.localStorage.getItem('cart') !== null) this.cartVisible = 1;
        },
        getCart:function(){
            if(window.localStorage.getItem('cart')){
                this.cart=window.localStorage.getItem('cart').split(',');
                for(var value of this.cart){
                    for(var index in this.products){
                        if(value == this.products[index].id ){
                            this.product.push(this.products[index])
                        }
                    }
                }
            }
        },
        removeFromCart:function(id){
            for(var index in this.product){
                if(id ==  this.product[index].id){
                    this.product.splice(index,1);
                    this.cart.splice(index,1)
                }
            }
            window.localStorage.setItem('cart', this.cart.join(','));
            this.getCart();
            location.reload();
        },
        makeOrder:function(){
            
            this.formVisible=0;
            this.cartVisible=0;
            
            this.cart = [];
            window.localStorage.removeItem('cart');
            alert("Ваш запит відправлено. Натисніть ОК, щоб оновити сторінку.");
        }
    },
});