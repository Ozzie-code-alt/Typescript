"use strict";
let sales = 123455;
let course = 'Typescript';
let is_Published = true;
let level;
function render(document) {
    console.log(document);
}
let collection = [1, 2, '3'];
let anotherNewArr = [];
let user = [1, 'justin'];
console.log(user[0]);
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 8] = "medium";
    Size[Size["large"] = 5] = "large";
})(Size || (Size = {}));
let mySize = Size.large;
console.log(mySize);
function calculateTax(income, taxYear) {
    if ((taxYear || 2022) < 50000) {
        return income & 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2025);
let employee = { id: 1, name: '', retire: (date) => {
        console.log(date);
    } };
let employees = {
    id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(90);
kgToLbs('90');
//# sourceMappingURL=index.js.map