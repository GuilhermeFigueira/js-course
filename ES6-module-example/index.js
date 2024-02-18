import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js";

console.log(PI); // 3.14159

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`); //62.83cm
console.log(`${area.toFixed(2)}cm²`); // 314.16cm²
console.log(`${volume.toFixed(2)}cm³`); // 1256.64cm³
