const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');


btn.addEventListener('click', calcularPrecioConDescuento)

function calcularPrecioConDescuento(){
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    
    if(!price || !coupon){
        pResult.innerText= 'Por favor llena el fomulario'
        return;
    }
    let discount;
    if(coupon == 'jajajaquepobre'){
        discount = 30;
    }
    else if (coupon == 'nosoytanpobre'){
        discount = 25;
    }
    else{
        pResult.innerText = 'El cupon vale el equivalente a mi existencia.';
        return
    }
    if(discount > 100){
        pResult.innerText = 'Aja, ya quisieras, no te vamos a dar nah.'
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;
    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}
