const GitHub = {
    name: "LaunchX",
    author: "OcielOrtegaVazquez",
    language: "JavaScript",
    numberOfCommits: 50,
    stars: 100,
    forks: 2,
    issues_open: 5,
    issues_close: 4,
    getTotalIssues: function() {
        return this.issues_open + this.issues_close;
    },
    getGeneralInfo: function() {
        return `This repository ${this.name} was created by ${this.author}`;
    },
};

console.log("Nombre del repo:" + GitHub.name);
console.log("Issues totales: " + GitHub.getTotalIssues());
console.log(GitHub.getGeneralInfo());

const Facebook = {
    user: "NicolayStojakovic",
    name: "OcielOrtega",
    age: 35,
}

const Uber = {
    user: "OcielOrtega",
    travel: 45,
    age: 35,
    preferenece: "UberX",
    city: "CDMX"
}