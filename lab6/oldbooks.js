function solve(input) {
    let name = input.shift();
    let number = Number(input.shift());
    let book = input.shift();
    let j = 0;
    while (name != book && j < number) {

        book = input.shift();
        j++



    }
    if (name == book) {
        console.log(`You checked ${j} books and found it.`)
    } else if (j == number) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${j} books.`)
    }

}
solve([
    'Bourne', '32',
    'True Story', 'Forever',
    'More Space', 'The Girl',
    'Spaceship', 'Strongest',
    'Profit', 'Tripple',
    'Stella', 'The Matrix',
    'Bourne'
])