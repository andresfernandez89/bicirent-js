// CLASE ALQUILER
class Rent{
    constructor(transportes, selectTransport, selectCantidad, selectHours) {
        let transport = transportes;
        this.selectTransport = selectTransport;
        this.selectCantidad = selectCantidad;
        this.selectHours = selectHours;
        this.price = function (){
            let price
            for (let i in transport) {
                if(transport[i].type == this.selectTransport){
                    price = Number(transport[i].priceHour)
                    break
                }
            }
        return price
        }
        this.finalPrice = function (){
            let price
            for (let i in transport) {
                if(transport[i].type == this.selectTransport){
                    price = Number(transport[i].priceHour)
                    break
                }
            }
            let totalPrice = Number(this.selectCantidad * this.selectHours * price)
            return totalPrice
        }
        this.image = function () {
            let img
            for (let i in transport) {
                if (transport[i].type == this.selectTransport) {
                    img = transport[i].image
                    break
                }
            }
            return img
        }
    }
}