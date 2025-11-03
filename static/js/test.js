function calcCircleCircumference(radius) {
    return (radius * 2 * Math.PI);
}
function calcStrokeDasharray(dasharrayElement, circumference) {
    return (circumference - dasharrayElement);
}
const circumference = calcCircleCircumference(375);
console.log(calcStrokeDasharray(200, circumference));
export {};
//# sourceMappingURL=test.js.map