/*
 *Reference:: https://stackabuse.com/how-to-format-number-as-currency-string-in-javascript/
 */


let myNumber = 1910562.55

let dollarUS = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

console.log('myNumber post formatting :: ', dollarUS.format(myNumber))

