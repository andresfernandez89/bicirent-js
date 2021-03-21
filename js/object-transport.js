class Transport { //Hay que terminar de armarlo
    constructor(transport, type) {
        let transport = transportes;
        this.type = type;
        this.priceHour = priceHour;
        this.cantidad = cantidad;
        this.year = year;
        this.image = image;
        this.amortizacion = function (){
            for (let i in transport) {
                if(transport[i].year == this.type) {
                        let d = new Date()
                        return d.getFullYear() - transport[i].year
                }
            }   
        }
    }
}