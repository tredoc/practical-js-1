export const checkNuminputs = (selector) => {
    const numInputs = document.querySelectorAll(selector)
    
    numInputs.forEach(item => {
        item.addEventListener('input', (evt) => {
            item.value = item.value.replace(/\D/, '')
        })
    })
}