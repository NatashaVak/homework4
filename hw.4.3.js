const employee1 = {
    name: "Alex",
    lastname: "Petrov",
    age: 32,
    companiesList: ["TJX", "CST", "RBC",],
}

const employee2 = {
    name: "Max",
    lastname: "Vega",
    age: 35,
    companiesList: ["AstorInc", "Cirix", "TD", "Audin", "Litus"],
}

compareEmployees(employee1, employee2);
function compareEmployees(employee1, employee2) {
    if (employee1.companiesList.length < employee2.companiesList.length) {
        console.log(employee2.name + " " + employee2.lastname + " has more companies. Here is the list of his companies:");
        for (let index = 0; index < employee2.companiesList.length; index++) {
            console.log(employee2.companiesList[index]);
        }
    }
    else if (employee1.companiesList.length > employee2.companiesList.length) {
        console.log(employee1.name + " " + employee1.lastname + " has more companies. Here is the list of his companies:");
        for (let index = 0; index < employee1.companiesList.length; index++) {
            console.log(employee1.companiesList[index]);
        }
    }
    else
        console.log(employee1.name + " and " + employee1.lastname, employee2.name + " " + employee2.lastname +
         " have the same number of companies");

}