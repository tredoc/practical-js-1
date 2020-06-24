import { post } from "jquery"

const forms = () => {
    const form = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')
    const inputsTelephone = document.querySelectorAll('input[name="user_phone"]')
    
    inputsTelephone.forEach(item => {
        item.addEventListener('input', (evt) => {
            item.value = item.value.replace(/\D/, '')
        })
    })

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо, с вами скоро свяжутся',
        failure: 'Что-то пошло не так...'
    }

    const postData = async (url, data) => {
        
        const result = await fetch(url, {
            method: 'POST',
            body: data
        })
        return await result.text()
    }

    form.forEach(item => {
        item.addEventListener('submit', (evt) => {
            evt.preventDefault()
            const statusMessage = document.createElement('div')
            item.append(statusMessage)

            const formData = new FormData(item)

            postData('https://my-json-server.typicode.com/tredoc/test-post', formData)
                .then(result => {
                    console.log(result)
                    statusMessage.textContent = message.success
                }).catch((err) => {
                    console.log(err)
                    statusMessage.textContent = message.failure
                }).finally(() => {
                    clearInputs()
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 5000)
                })
        })
    })

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = ''
        })
    }
}

export default forms