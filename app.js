const bodyTag = document.getElementsByTagName('body')[0]
const label = document.querySelector('label')
const uil = document.querySelector('.uil')
const inputWrapper = document.querySelector('.input-wrapper')

const changeColor = (element, key, color) => {
    return element.style[key] = color
}

username.addEventListener('input', () => {

    const usernameInputValueLength = username.value.length
    const minCharactersLength = username.min
    const maxCharactersLength = username.maxLength
    const restHowMany = maxCharactersLength - usernameInputValueLength

    
    const dynamicResult = restHowMany === 0 ? 'ok' : restHowMany
    label.textContent = dynamicResult
    
    if(usernameInputValueLength < minCharactersLength) {
        changeColor(bodyTag, 'backgroundColor', '#470c0a')
        changeColor(label, 'color',  'red')
        changeColor(label, 'color', '#470c0a')
        changeColor(uil, 'color', '#470c0a')

        return
    }

    changeColor(bodyTag, 'backgroundColor', '#15a066')
    changeColor(label, 'color', '#15a066')
    changeColor(uil, 'color', '#15a066')
    
}) 

