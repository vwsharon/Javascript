console.log('start :: index.js')


const formLocation = document.getElementById('formLocation')

formLocation.onsubmit = (event) => {

    event.preventDefault()
    const location = document.getElementById('location').value

    if (location) {
        console.log('Location - ', location)
    } else {
        console.error('please enter location')
    }

}