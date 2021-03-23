const prompt = require('prompt-sync')()

let num = Number(prompt('Enter number :: '))

let limit = Number(prompt('Enter limit :: '))

for (let i = 1; i <= limit; i++) {

    console.log('%d * %d = %d', num, i, (num * i))
}