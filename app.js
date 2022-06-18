const label = document.querySelector('label')
const uil = document.querySelector('.uil')

const maxLength = input.maxLength

input.addEventListener('input', () => {

    label.textContent = input.maxLength - input.value.length

    if(input.value.length < input.min) {
        console.log('É necessário 6 dígitos')
        document.getElementsByTagName('body')[0].style.backgroundColor = '#470c0a'
        label.style.color = 'red'
        uil.style.color = '#470c0a'
    }else {
        console.log('Sucesso')
        document.getElementsByTagName('body')[0].style.backgroundColor = '#15a066'
        label.style.color = '#15a066'
        uil.style.color = '#15a066'

    }
}) 

label.textContent = maxLength