const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeSelector) => {
        const trigger = document.querySelectorAll(triggerSelector)
        const modal = document.querySelector(modalSelector)
        const close = document.querySelector(closeSelector)

        trigger.forEach(item => {
            item.addEventListener('click', (evt) => {
            if (evt.target) {
                evt.preventDefault()
            }
            modal.style.display = 'block'
            document.body.classList.add('modal-open')
            })      
        })

        close.addEventListener('click', () => {
            modal.style.display = 'none'
            document.body.classList.remove('modal-open')   
        })
        
        modal.addEventListener('click', (evt) => {
            if (evt.target === modal) {
                modal.style.display = 'none'
                document.body.classList.remove('modal-open')   
            }
        })
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close')
    bindModal('.phone_link', '.popup', '.popup .popup_close')

    const showModalByTyme = (selector, time) => {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block'
            document.body.classList.add('modal-open')
        }, time)
    }

    showModalByTyme('.popup', 60000)
}

export default modals