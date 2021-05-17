import e from"https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js";if(document.querySelector("#menuCloseBtn")){const e=document.querySelector("#menuCloseBtn"),t=document.querySelector(".navmenu");e.addEventListener("click",(function(e){t.classList.remove("navmenu--open")}))}if(document.querySelector(".menu-switcher")){const e=document.querySelector(".menu-switcher"),t=document.querySelector(".navmenu");e.addEventListener("click",(function(e){t.classList.add("navmenu--open")}))}document.getElementById("products")&&new e({el:"#products",data:{fishProducts:[],userSelection:[]},methods:{getProductData:function(){fetch("products.json").then((e=>e.json())).then((e=>this.fishProducts=e))},addToSelection:function(e){if("aantal"===e.target.value);else{let t={fishKind:e.target.dataset.fishkind,image:e.target.dataset.fishimage,count:e.target.value};this.userSelection.push(t)}},addToShoppingCart:function(e){e.preventDefault(),localStorage.setItem("userSelection",JSON.stringify(this.userSelection)),window.location=e.target.href,console.log(localStorage.getItem("userSelection"))}},mounted(){localStorage.clear(),this.getProductData()}}),document.querySelector("#shoppingCart")&&new e({el:"#shoppingCart",data:{userSelected:[]},methods:{getUserSelection:function(){let e=JSON.parse(localStorage.getItem("userSelection"));this.userSelected=e},calculatePriceTotal:function(){const e=document.querySelector("#subTotal").innerHTML,t=document.querySelector("#shipping").innerHTML,o=document.querySelector("#total");let n=e.replace(/\,/g,"."),r=t.replace(/\,/g,".");n=Number(n),r=Number(r);let a=n+r,c=(a+a/100*21).toFixed(2);o.innerHTML=c}},mounted(){this.getUserSelection(),this.calculatePriceTotal()}}),document.querySelector("#order")&&new e({el:"#order",data:{name:"",lastName:"",address:"",zipCode:"",city:"",phone:"",mail:""},methods:{saveUserData:function(){let e=JSON.stringify(this.$data);localStorage.setItem("userData",e),window.location="confirmation.html"}}}),document.querySelector("#confirmationScreen")&&new e({el:"#confirmationScreen",data:{orderData:[],userData:null},methods:{getOrderData:function(){const e=JSON.parse(localStorage.getItem("userSelection"));this.orderData=e},getUserData:function(){const e=JSON.parse(localStorage.getItem("userData"));this.userData=e},returnToHome:function(){localStorage.clear(),window.location="index.html"}},mounted(){this.getOrderData(),this.getUserData(),setTimeout(this.returnToHome,3e4)}});
