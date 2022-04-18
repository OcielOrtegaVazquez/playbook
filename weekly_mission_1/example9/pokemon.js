export default class Pokemon {
    constructor(name, mensaje) {
        this.name = name;
        this.mensaje = mensaje;
    }

    log(message) {
        console.log(`${this.name}` + `${this.mensaje}`);
    }
}