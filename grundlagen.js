// Ausgabe
console.log('Hallo');

// Variablen und Datentypen
const zahl1 = 3.5; // number
const zahl2 = -17; // number

const text1 = 'Blabla'; // string
const text2 = `Blabla ${zahl1} ist vom Typ ${typeof (zahl1)}`; // string

const wahr = (1 > 2); // boolean

// Arrays []
const namen = ['Anna', 'Berta', 'Carla']; // object
const anzahl = namen.length; // 3
namen[3] = 'Dieter';

for (let i = 0; i < namen.length; i++) {
    console.log(namen[i]);
}

