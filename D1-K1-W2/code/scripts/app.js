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
                fetch('../products.json')
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
                localStorage.setItem('userSelection', this.userSelection);
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