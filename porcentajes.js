const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');


btn.addEventListener('click', calcularPrecioConDescuento)

// const couponObj = {
//     'PlatziDay' : 30,
//     'MotherDays' : 25, 
// }

const couponsList = [];
couponsList.push({
    name: 'PlatziDay',
    discount: 30,
});
couponsList.push({
    name: 'MothersDay',
    discount: 50,
});
couponsList.push({
    name: 'BlackDay',
    discount: 70,
});

function calcularPrecioConDescuento(){
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    
    if(!price || !coupon){
        pResult.innerText= 'Por favor llena el fomulario'
        return;
    }
    let discount;

    function isCouponArray (couponElement){
        return couponElement.name == coupon;
    }

    const couponInArray = couponsList.find(isCouponArray);

    if(couponInArray){
        discount = couponInArray.discount;
    } else{
        pResult.innerText = 'El cupon equivale lo que mi existencia.'
        return;
    }

    // if(couponObj[coupon]){
    //     discount = couponObj[coupon];
    // } else {
    //     pResult.innerText = 'El cupon equivale lo que mi existencia.'
    // }

   if(discount > 100){
        pResult.innerText = 'Aja, ya quisieras, no te vamos a dar nah.'
    return;
    }

    const newPrice = (price * (100 - discount)) / 100;
    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}
