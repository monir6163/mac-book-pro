// all Variables
const bestPrice = document.getElementById('best-price');
const memoryCost = document.getElementById('extra-memory-price');
const storageCost = document.getElementById('extra-storage-price');
const deliveryCharge = document.getElementById('delivery-charge');
const allCost = document.getElementById('total-price');
const total = document.getElementById('total');
const promoInput = document.getElementById('promo-input');


// Total Price calculator
function totalPrice(){
    const totalCost = parseInt(bestPrice.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCharge.innerText);
    allCost.innerText = totalCost;
    return totalCost;
}

// memory cost calculator
function memoryTest(id, price){
    document.getElementById(id).addEventListener('click',function(){
        memoryCost.innerText = price;
        totalPrice();
        total.innerText = totalPrice();
    })
}
memoryTest('free-memory','0');
memoryTest('cost-memory','180');


// storage cost calculator
function storageTest(id, price){
    document.getElementById(id).addEventListener('click',function(){
        storageCost.innerText = price;
        totalPrice();
        total.innerText = totalPrice();
    })
}
storageTest('ssd-256gb', '0');
storageTest('ssd-512gb', '100');
storageTest('ssd-1tb', '180');


// delivery Cost calculator
function deliveryTest(id, price){
    document.getElementById(id).addEventListener('click',function(){
        deliveryCharge.innerText = price;
        totalPrice();
        total.innerText = totalPrice();
    })
}
deliveryTest('free-delivery', '0');
deliveryTest('cost-delivery', '20');


// total calculation with promo code
function promoCode(){
    const promoValue = promoInput.value;
    if(promoValue == 'stevekaku'){
        const promoCalculation = (parseInt(total.innerText) * 20) / 100;
        total.innerText = parseInt(total.innerText) - promoCalculation;
        promoInput.value = '';
    }else{
        alert('Please Enter Correct Promo Code')
    }
}