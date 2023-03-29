const sentence = 'HELLO WORLD';

let wordCount = 1; 
let vowelCount = 0;


for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i].toLowerCase(); 
  if (char === ' ') {
    wordCount++; 
  }

  
  if (char === 'a'|| char === "e" || char === 'i' || char === 'o' || char === 'u') {
    vowelCount++;
  }
}

console.log('Word count:', wordCount);
console.log('Vowel count:', vowelCount);