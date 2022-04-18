const explorers = [{
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

/* Imprimir nombre de explorers */
explorers.forEach(element => {
    console.log(element.name);
});

/* imprimir Stack */
explorers.forEach(element => {
    console.log("Nombre: " + element.name);
    console.log("Stack: " + element.stack);
});

/* Recorrer lista y crear lista con map */
const listStack = explorers.map(element => {
    const stack = {};
    stack[element.stack] = element.stack
    return stack;
});

console.log(listStack);

/* Obtener Explorer con JS */
const filtro = explorers.filter((element) =>
    element.stack.includes('js')
);

console.log(filtro);

/* Obtener Explorer CDMX */
const filtroCDMX = explorers.find((filterCDMX) => filterCDMX.city == 'CDMX')
console.log(filtroCDMX)

/* Reduce */
const reduceExercise = explorers.reduce((completed, element) => completed.exercises_completed + element, 0);
console.log(reduceExercise);

/* Some */
const areSomeTrue = explorers.some((someFinished) => someFinished.missions.frontend.exercisesFinished === true);
console.log(areSomeTrue);

/* Every */
const everyTrue = explorers.every((someFinished) => someFinished.missions.onboarding.isFinished === true);
console.log(everyTrue);