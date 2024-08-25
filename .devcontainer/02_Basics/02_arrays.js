const marvel_heros = ["ironman","thor","spiderman"]

const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)// This is not a good practice
// console.log(marvel_heros);// This not a good pactice

// console.log(marvel_heros[3][2]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

/////////////// Spread Operator //////////////////////

const all_new_heros =[...marvel_heros,...dc_heros,]

// console.log(all_new_heros);

/////////////////////////////////////////////////////


const new_Array = [1,2,3,[4,5,6,],7,9,[4,5,[9,8]]]

const new_Array2 =new_Array.flat (Infinity)
// console.log(new_Array2);

console.log(Array.isArray("Shaib"));

console.log(Array.from({name: "Shaib"})); // Interviewer ask in interview

/////////////////////////////////////////////////////

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
