// apps.js

let secretMessage = ['Starsigns', 'are', 'not', 'about', 'what', 'you', 'are', 'but', 'who', 'you', 'are,', 'zodiac', 'signs', 'tell', 'you', 'what', 'is', 'written', 'in', 'the', 'dazzling','constellations', 'of', 'stars' ];

secretMessage.pop();
//console.log(secretMessage.length);

secretMessage
secretMessage.push('the', 'stars');
console.log(secretMessage);//


secretMessage[7] = 'from';
//console.log(secretMessage);

secretMessage.shift();
//console.log(secretMessage);

secretMessage.unshift('Zodiac signs');
//console.log(secretMessage);

secretMessage.splice(6, 5, 'know,');
//console.log(secretMessage);

console.log(secretMessage.join(' '));