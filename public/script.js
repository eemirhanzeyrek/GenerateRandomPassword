const resultSpan = document.getElementById('result')
const generateButton = document.getElementById('generate')
const clipboardButton = document.getElementById('clipboard')

const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

const getRandomSymbol = () => {
    const symbols = '@!#$%&*+-:;,.'
    
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const passwordFunctions = {getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol}

const generatePassword = () => {
    const length = 25

    let generatedPassword = ''

    for(let x = 0; x < length; x++){
        generatedPassword += Object.values(passwordFunctions)[Math.floor(Math.random() * 4)]()
    }

    return generatedPassword
}

generateButton.addEventListener('click', () => {
    resultSpan.innerText = generatePassword()
})

clipboardButton.addEventListener('click', () => {
    const password = resultSpan.innerText
    
    if(!password){
        return
    }
    
    const textArea = document.createElement('textarea')
    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    window.alert('password copied')
})