const images = () => {
    const workSection = document.querySelector('.works')
    const imgPopup = document.createElement('div')
    const bigImage = document.createElement('img')

    imgPopup.classList.add('popup')
    workSection.append(imgPopup)
    imgPopup.append(bigImage)

    workSection.addEventListener('click', (evt) => {
        evt.preventDefault()
        const target = evt.target
        if(target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex'
            imgPopup.style.justifyContent = 'center'
            imgPopup.style.alignItems = 'center'
            const path = target.parentNode.getAttribute('href')
            bigImage.setAttribute('src', path)
            bigImage.style.height = '80%'
            document.body.classList.add('modal-open')
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none'
            document.body.classList.remove('modal-open')
        }
    })
}

export default images