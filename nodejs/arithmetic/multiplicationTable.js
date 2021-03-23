const prompt = require('prompt-sync')()

let num = Number(prompt('Enter number :: '))

let range = Number(prompt('Enter range :: '))

for (let i = 1; i <= range; i++) {

    console.log('%d * %d = %d', num, i, (num * i))
}