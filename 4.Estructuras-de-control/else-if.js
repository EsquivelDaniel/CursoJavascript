var compraTotal = 90;
var descuento = 0;

// Ofrecer 30% descuento si la compra es mayor o igual a $300.
// Ofrecer 20% descuento si la compra es mayor o igual a $200.
// Ofrecer 10% desceunto si la compra es menor que $200 pero mayor que $100
if(compraTotal >= 300) {
    descuento = 0.3;
    console.log("Tienes descuento de 30%");
} else if (compraTotal >= 200){
    descuento = 0.2;
    console.log("Tienes descuento de 20%");
} else if (compraTotal >= 100){
    descuento = 0.1
    console.log("Tienes descuento de 10%");
} else {
    console.log("No tiene descuento");
}
console.log("Total a pagar:", compraTotal - (compraTotal * descuento));