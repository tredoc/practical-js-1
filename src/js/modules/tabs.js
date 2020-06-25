const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    
    const header = document.querySelector(headerSelector)
    const tab = document.querySelectorAll(tabSelector)
    const content = document.querySelectorAll(contentSelector)

    const showTabContent = (i = 0) => {
        content[i].style.display = display
        tab[i].classList.add(activeClass)
    }

    const hideTabContent = () => {
        content.forEach(item => {
            item.style.display = 'none'
        })
        tab.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

    hideTabContent()
    showTabContent()

    header.addEventListener('click', (evt) => {
        evt.preventDefault()
        const target = evt.target
  
        if (target.classList.contains(tabSelector.substring(1)) || 
            target.parentNode.classList.contains(tabSelector.substring(1))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }

    })
}

export default tabs