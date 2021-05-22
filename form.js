const button = document.getElementById('btn')

button.onclick = function(){
    const text = document.getElementById('text').value
    const password = document.getElementById('password').value

    console.log(`Login: ${text}\nPassword: ${password}`)
}

