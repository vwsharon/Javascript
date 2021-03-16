const readline = require('readline')

console.time('addNumbers')

const readInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


readInterface.question('Enter first number :: ', (num1) => {

    const number1 = Number(num1)
    console.info('Number :: ', number1)

    readInterface.question('Enter second number :: ', (num2) => {

        const number2 = Number(num2)

        console.info('Number :: ', number2)

        console.info('The sum is ', number1 + number2)

        readInterface.close()

        console.timeEnd('addNumbers')

    })


})



