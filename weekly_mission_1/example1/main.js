/* 1.- Crear un objeto con sus propiedades */

let myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar);

/* 2.- Declaración de un objeto con variables locales y publicas */

const myModule = (() => {
    /* Variable de contexto local */
    const privateFoo = "Soy un valor privado,solo me usan dentro de este objeto";
    const privateBar = [1, 2, 3, 4];
    const baz = "Soy un valor que va a ser expuesto"

    /* Variebles para guardar las variebales locales */
    const exported = {
        publicFoo: "Valor publico, pueden verme desde donde me llamen",
        publicBar: "Otro Valor publico",
        publicBaz: baz
    }

    /* Exposision de variableslocales */
    return exported
})();

console.log(myModule);