   /*____Login Script____*/
   let loginbtn = document.getElementById('loginbtn');
   let loginpage = document.getElementById('loginpage');
   let content = document.getElementsByClassName('content');

   loginbtn.addEventListener('click',function(){                                
       content[0].style.display ="none";
       loginpage.style.display = "block";
   })
  
    /*____Add Cart____ */
    let addCart = document.getElementById("addCart");
    let collapseContent = document.getElementById("collapseContent");
    addCart.addEventListener("click",function(){        
        collapseContent.classList.toggle("openCollapse");
    })    

       /*___addItemToCart___*/
       let addItemToCart = document.querySelectorAll(".addItemToCart");
       let cartItem = document.querySelector(".cartItem");
       let cardcount = document.getElementById("cartcount");
       let cartItems = "";
   	   let count = 0;
	   cardcount.innerHTML = count;

	   let totOrderedAmount = 0;
         
       if(cartItems == ""){
           cartItem.innerHTML =" <p>No Items added</p>";
       }
       
       addItemToCart.forEach(function(addedItems){                        
           addedItems.addEventListener("click",function(){                          
               addedItems.textContent ="Added";
               count++;
        cardcount.innerHTML = count;
        cardcount.style.display = "block";
   
               const card = addedItems.closest(".itemCards");
               if(card){
                   const dynamictitle = card.querySelector(".cardTitle").textContent;
                   const dynamicrating = card.querySelector(".rating").querySelector('span').innerHTML;
                   const dynamicprice = card.querySelector(".price").textContent;
                   const dynamicImages = card.querySelector(".cartImage").src;       
               
                   const newcartItem = document.createElement('div');
                   newcartItem.classList.add("cartinfo");
                   newcartItem.innerHTML = `
                   <div class="contents">
                   <h5 class="cardTitle">${dynamictitle}</h5>
                   <p class="rating">${dynamicrating}</p>
                   <h5 class="price">${dynamicprice}</h5>
                   <div class="_adsubbtn">
                   <button class="adbtn">+</button>
                   <span class="showcount">1</span>
                   <button class="subbtn">-</button>
                   </div>
                   </div>                
                   <div class="image">
                   <img src=${dynamicImages} alt="">                        
                   </div>
                   <div class="closeItem">
                   <span><i class="fa fa-close"></i></span>
                   </div>`
   
                   cartItem.appendChild(newcartItem);    

                   /*________cart total amount Added________ */
                    let cartTotalOrders = document.getElementById("cartTotalOrders");
                    let modalShow = document.getElementById("exampleModal");
                    let modalbackdrop = document.querySelector(".content");
                    let modalBody = document.querySelector(".modal-body");
                    let closepopup = document.querySelector(".closepopup");
                    debugger                    
                    let orderPrice = totOrderedAmount += parseInt(dynamicprice);
                    cartTotalOrders.innerHTML = orderPrice;

                    if(orderPrice >= 2000){
                        modalShow.classList.add("show");
                        let dynamicModalDrop = document.createElement('div');
                        dynamicModalDrop.classList.add('modal-backdrop', 'fade', 'show');
                        modalbackdrop.appendChild(dynamicModalDrop);
                        modalBody.innerHTML = `Congratulation You Have Won ${orderPrice}`;
                        
                        closepopup.addEventListener("click",function(){
                        modalShow.classList.remove("show");
                        dynamicModalDrop.classList.remove('modal-backdrop', 'fade', 'show');
                        modalbackdrop.removeChild(dynamicModalDrop);
                        })
                        
                    }

                  
                    /*________cart total amount Added________ */
   
                   const closebtn = newcartItem.querySelector(".closeItem");
                   closebtn.addEventListener("click",function(){                         
                              newcartItem.remove();   
                              
                              // count of card while removing the card content in cart
                if(count > 0){
                  count--;
                  cardcount.innerHTML = count;
                  if(count === 0 ){                  
                  cardcount.style.display = "none";
                }
                }
                
                // end count of card while removing the card content in cart
                              
                              /*________cart total amount removed________ */
                              orderPrice = totOrderedAmount -= parseInt(dynamicprice);
                              cartTotalOrders.innerHTML = orderPrice;
                              /*________cart total amount removed________ */
                               
                              if (cartItem.querySelectorAll(".cartinfo").length === 0) {
                               cartItem.innerHTML = "<p>No Items added</p>";
                               addedItems.textContent ="Add";
                           }  
                            
                            }); 
                                                      
                            let addbtn = newcartItem.querySelector('.adbtn');
                            let subbtn = newcartItem.querySelector('.subbtn');
                            let showcount = newcartItem.querySelector('.showcount');
            
                            let cartItemCount = 1;
                            showcount.textContent = cartItemCount;
            
                            addbtn.addEventListener("click",function(){
                                debugger
                                cartItemCount++;
                                showcount.textContent = cartItemCount;                                     
                            })
            
                            subbtn.addEventListener("click",function(){
                                debugger
                                if(cartItemCount > 0){
                                    cartItemCount--;
                                showcount.innerHTML = cartItemCount;
                                }
                            })
                                        
                 const removeintialmsg = cartItem.querySelector("p");
                 if(removeintialmsg.textContent === "No Items added"){
                   removeintialmsg.remove();
                 }    
               }  
                    /*____User Orders / Wallet____*/
                    let ordersTotal = document.getElementById("ordersTotal");                       
                    let walletAmount = document.getElementById("walletAmount");
                    let userOrders = [totOrderedAmount];
                    let totalOrders = 0;
                    var OfferAmount = 50;
                    ordersTotal.innerHTML = totalOrders;  
                    userOrders.forEach(function(orderValues){
                        debugger
                    totalOrders += orderValues;
                    })
                    if(totalOrders >= 2000){                        
                        walletAmount.innerHTML = OfferAmount;                    
                    } 
                    /*____User Orders / Wallet____*/            
           })
             
       }); 


    /*_____Hide and Show Contents_____ */
       let mainContent = document.getElementById("mainContent");
       let orders = document.getElementById("orders");
       let wallet = document.getElementById("wallet");
       let ordersLink = document.getElementById("orderLink");
       let walletLink = document.getElementById("walletLink");
       ordersLink.addEventListener("click",function(){
           mainContent.style.display = "none";
           wallet.style.display = "none";
           orders.style.display = "block";
       })
       walletLink.addEventListener("click",function(){
           mainContent.style.display = "none";
           orders.style.display = "none";
           wallet.style.display = "block";
       })
 
    /*_____Search Products_____ */
    let totalItems = ["mobile","shoes"];
    let mobiles = document.getElementById("mobiles");
    let shoes = document.getElementById("shoes");
    let SearchItems = document.getElementById("SearchItems");
    let topRatedContent = document.querySelector(".topRatedContent");
    let bestSellingContents = document.querySelector(".bestSellingContents");
    
    SearchItems.addEventListener("click",function(){
        debugger
        let searchProducts = document.getElementById("searchProducts").value;
        if(totalItems.includes(searchProducts)){
            if(searchProducts == "mobile"){
                mobiles.style.display = "block"; 
                shoes.style.display = "none";              
            }
            else if(searchProducts == "shoes"){
                shoes.style.display = "block";
                mobiles.style.display = "none";       
            }
            topRatedContent.style.display = "none";
            bestSellingContents.style.display = "none";
    }
    })
   




 