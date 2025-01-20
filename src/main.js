// src/main.js
import { osszead, kivon, szoroz, eloszt } from './szamologep.js';
import isEven from 'is-even';

const num1 = 10;
const num2 = 5;

const sum = osszead(num1, num2);
console.log(`Összeg: ${sum}, Páratlan: ${isEven(sum)}`);

const difference = kivon(num1, num2);
console.log(`Különbség: ${difference}, Páratlan: ${isEven(difference)}`);

const product = szoroz(num1, num2);
console.log(`Szorzat: ${product}, Páratlan: ${isEven(product)}`);

const quotient = eloszt(num1, num2);
console.log(`Hányados: ${quotient}, Páratlan: ${isEven(quotient)}`);