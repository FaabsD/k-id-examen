import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';

if (document.querySelector('#menuCloseBtn')) {
    const menuCloseBtn = document.querySelector('#menuCloseBtn');
    const navMenu = document.querySelector('.navmenu')

    menuCloseBtn.addEventListener('click', function (e) {
        navMenu.classList.remove('navmenu--open');
    });
}

if (document.querySelector('.menu-switcher')) {
    const menuSwitch = document.querySelector('.menu-switcher');
    const navMenu = document.querySelector('.navmenu');

    menuSwitch.addEventListener('click', function (e) {
        navMenu.classList.add('navmenu--open');
    });
}

if (document.getElementById('products')) {

    let productsApp = new Vue({
        el: '#products',
        data: {
            fishProducts: [],

            userSelection: []
        },

        methods: {
            getProductData: function () {
                fetch('products.json')
                    .then(response => response.json())
                    .then(data => (this.fishProducts = data));
            },

            addToSelection: function (event) {
                if (event.target.value === "aantal") {

                } else {
                    let selectionToAdd = {
                        fishKind: event.target.dataset.fishkind,
                        image: event.target.dataset.fishimage,
                        count: event.target.value,
                    };

                    this.userSelection.push(selectionToAdd);
                }

            },

            addToShoppingCart: function(e) {
                e.preventDefault();
                localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
                window.location = e.target.href;
                console.log(localStorage.getItem('userSelection'));
            }
        },
        mounted() {
            localStorage.clear();
            this.getProductData()
        }
    })
}

if(document.querySelector('#shoppingCart')) {
    let shoppingCart = new Vue({
        el: '#shoppingCart',
        data: {
            userSelected: []
        },

        methods: {
            getUserSelection: function() {
                let userSelection = JSON.parse(localStorage.getItem('userSelection'));
                this.userSelected = userSelection;
            },

            calculatePriceTotal: function() {
                const subTotal = document.querySelector('#subTotal').innerHTML;
                const shipping = document.querySelector('#shipping').innerHTML;
                const tax = 21;
                const priceTotal = document.querySelector('#total');

                let formattedSubtotal = subTotal.replace(/\,/g, '.');
                let formattedShipping = shipping.replace(/\,/g, '.');

                formattedSubtotal = Number(formattedSubtotal);
                formattedShipping = Number(formattedShipping);

                let sum1 = formattedSubtotal + formattedShipping;
                let sum2 = sum1 / 100 * tax;
                let sum3 = sum1 + sum2;
                let roundedSum = sum3.toFixed(2);
                
                priceTotal.innerHTML = roundedSum;
            }
        },

        mounted() {
            this.getUserSelection();
            this.calculatePriceTotal()
        }

    })
}

if(document.querySelector('#order')) {
    let orderData = new Vue({
        el: '#order',
        data: {
            name: '',
            lastName: '',
            address: '',
            zipCode: '',
            city: '',
            phone: '',
            mail: ''
        },
        methods: {
           saveUserData: function() {
               let dataToSave= JSON.stringify(this.$data);
               
               localStorage.setItem('userData', dataToSave);

               window.location = 'confirmation.html'
           }
        },
    })
}

if(document.querySelector('#confirmationScreen')) {
    let confirmation = new Vue({
        el: '#confirmationScreen',
        data: {
            orderData: [],
            userData: null
        },
        methods: {
            getOrderData: function() {
                const order = JSON.parse(localStorage.getItem('userSelection'));
                this.orderData = order;
            },
            getUserData: function() {
                const user = JSON.parse(localStorage.getItem('userData'));
                this.userData = user;
            },
            returnToHome: function() {
                localStorage.clear();
                window.location = "index.html";
            }
        },

        mounted() {
            this.getOrderData();
            this.getUserData();
            setTimeout(this.returnToHome, 30000);
    
        }
    })
}