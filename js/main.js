function productDetails(productCost, price){
    const costAmount = document.getElementById(productCost);
    costAmount.innerText = price;
    priceDetails();
    
}
//handle case event
//8 gb memory
document.getElementById('first-memory').addEventListener('click', function(){
    productDetails('memory-cost', 0);
});
//16 gb memory
document.getElementById('second-memory').addEventListener('click', function(){
    productDetails('memory-cost', 180);
});
//storage event 
//256 GB storage
document.getElementById('first-storage').addEventListener('click', function(){
    productDetails('storage-cost', 0);
});
//512 GB storage
document.getElementById('second-storage').addEventListener('click', function(){
    productDetails('storage-cost', 100);
});
//1TB storage
document.getElementById('third-storage').addEventListener('click', function(){
    productDetails('storage-cost', 180);
});
//Free delivery
document.getElementById('free-delivery').addEventListener('click', function(){
    productDetails('delivery-cost', 0);
});
//Price delivery
document.getElementById('delivery-charge').addEventListener('click', function(){
    productDetails('delivery-cost', 20);
});

//total price and apply coupon code
function priceDetails(){
    //base price $1299 conversion
    const basePrice = document.getElementById('base-price');
    const convertBasePrice = parseInt(basePrice.innerText);
    //memory price $0 & $180 conversion
    const memoryCost = document.getElementById('memory-cost');
    const convertMemoryCost = parseInt(memoryCost.innerText);
    //storage price $0 & $100 & $180 conversion
    const storageCost = document.getElementById('storage-cost');
    const convertStorageCost = parseInt(storageCost.innerText);
     //delivery charge $0 & $20 conversion
    const deliveryCost = document.getElementById('delivery-cost');
    const convertDeliveryCost = parseInt(deliveryCost.innerText);

     //total price 
    const totalPrice = convertBasePrice + convertMemoryCost + convertStorageCost + convertDeliveryCost;
    
    document.getElementById('total-price').innerText = totalPrice;
    const couponPrice = document.getElementById('coupon-price');
    couponPrice.innerText = totalPrice;
   

    document.getElementById('apply-button').addEventListener('click', function(){
        //coupon code apply and display final total
        const couponCode = document.getElementById('coupon-code');
        if(couponCode.value == 'stevekaku'){
            couponPrice.innerText = couponPrice.innerText - (couponPrice.innerText * 20)/100;
            couponCode.value = '';
            
        }
 
    });

}
