//all target html  
const bestPrice = document.getElementById('best-price');
const memoryPrice = document.getElementById('extra-memory-price');
const storagePrice = document.getElementById('extra-storage-price');
const deliveryCharge = document.getElementById('delivery-charge');
const allPrice = document.getElementById('total-price');
const discountTotal = document.getElementById('total-after-discount');

// TotalPrice Function 
function updateTotalPrice(){
    const totalPrice = parseInt(bestPrice.innerText) + parseInt(memoryPrice.innerText) + parseInt(storagePrice.innerText) + parseInt(deliveryCharge.innerText);
    allPrice.innerText = totalPrice;
    return totalPrice;
}

// event linstener for Memory
document.getElementById('default-memory').addEventListener('click',function(){
    memoryPrice.innerText = '0';
    updateTotalPrice();
    grandTotalAfterDiscount();
})

document.getElementById('extra-memory').addEventListener('click',function(){
    memoryPrice.innerText = '180';
    updateTotalPrice();
    grandTotalAfterDiscount();
})

// event linstener for Storage
document.getElementById('256gb-ssd').addEventListener('click',function(){
    storagePrice.innerText = '0'
    updateTotalPrice();
    grandTotalAfterDiscount();
})

document.getElementById('512gb-ssd').addEventListener('click',function(){
    storagePrice.innerText = '100'
    updateTotalPrice();
    grandTotalAfterDiscount();
})

document.getElementById('1tb-ssd').addEventListener('click',function(){
    storagePrice.innerText = '180'
    updateTotalPrice();
    grandTotalAfterDiscount();
})

// event linstener for delivery option
document.getElementById('free-delivery-cost').addEventListener('click',function(){
    deliveryCharge.innerText = '0';
    updateTotalPrice();
    grandTotalAfterDiscount();
})

document.getElementById('express-delivery').addEventListener('click',function(){
    deliveryCharge.innerText = '20';
    updateTotalPrice();
    grandTotalAfterDiscount();
})

// Function for updating Grand Total price without discount
function grandTotalAfterDiscount() {
   discountTotal.innerText = updateTotalPrice()
}

//Grand total with discount
function promoCode(){
    const promoCode = document.getElementById('promocode');
    const promoValue = promoCode.value;
    if(promoValue == 'stevekaku'){
        const discountRate = (updateTotalPrice() / 100) * 20;
        discountTotal.innerText = updateTotalPrice() - discountRate;
        promoCode.value = '';
    }else{
        alert('Please Enter Correct Promo Code')
    }
}