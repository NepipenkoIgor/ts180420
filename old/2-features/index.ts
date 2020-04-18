/* let/const */
let period = 60;
const baseUrl = 'http://localhost:4000';

/* object*/
let firstName = 'Igor';
let account: { firstName: string, getName(): string, info?: { male: boolean } } = {
    firstName,
    getName() {
        return this.firstName;
    }
}


/* spred operator*/
let person = {...account};
let dates = [...[11, 12, 13]]

/* desctructoring */
let {firstName: username} = account;
let [firstDate] = dates;

/* templater string */
function userMessage([start, end]: TemplateStringsArray, {firstName: user}: typeof person) {
    return `${start}${user}${end}`
}

console.log(userMessage`Good Day,  ${person}!!`);

/* for of*/
for (const date of dates) {
    console.log(date);
}
for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i));
}

/* Arrow function*/
let sum: (a: number, b: number) => number = (a: number, b: number): number => a + b;

/*class**/
class Point {
    x: number = 1;
    y: number = 1;

    sum() {
        return this.x + this.y;
    }
}


/* Optional chaining */
let x = account?.info?.male;

/* ?? operator*/
let admin;
let p = admin ?? account; // ||
