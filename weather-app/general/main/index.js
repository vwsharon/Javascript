console.log('start :: index.js')


const formLocation = document.getElementById('formLocation')

formLocation.onsubmit = (event) => {

    event.preventDefault()
    const location = document.getElementById('location').value

    if (location && location.trim().length !== 0) {
        console.log('Location -', location.trim())
    } else {
        console.error('please enter location')
    }

}