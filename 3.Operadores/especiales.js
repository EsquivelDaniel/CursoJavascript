console.log("Tipo de:", typeof 5);
console.log("Tipo de:", typeof true);
console.log("Tipo de:", typeof {});
console.log("Tipo de:", typeof []);
console.log("Tipo de:", typeof "");
console.log("Tipo de:", typeof null);
console.log("Tipo de:", typeof undefined);

var persona = {
    nombre: "Juan",
    apellido: "Soto"
};

delete persona.apellido;
console.log("Persona:", persona);

var heroes = ["Ironman", "Batman", "Thor"];
console.log("Heroes:", heroes);

delete heroes[1];
console.log("Heroes:", heroes);