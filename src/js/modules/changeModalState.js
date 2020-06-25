import { checkNuminputs } from "./utils"

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img')
    const windowWidth = document.querySelectorAll('#width')
    const windowHeight = document.querySelectorAll('#height')
    const windowType = document.querySelectorAll('#view_type')
    const windowProfile = document.querySelectorAll('.checkbox')


    checkNuminputs('#width')
    checkNuminputs('#height')

    const bindState = (event, elem, prop) => {
        elem.forEach((item, index) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = index
                        break
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            index === 0 ? state[prop] = "Холодное" : state[prop] = "Теполое"
                            elem.forEach((box, j) => {
                                box.checked = false
                                if (index == j) {
                                    box.checked = true
                                }})
                        } else {
                            state[prop] = item.value
                        }
                       break
                    case 'SELECT':
                        state[prop] = item.value
                        break
                    default:
                        console.log('unknown node name')     
                }
                console.log(state)
            })
        })
    }

    bindState('click', windowForm, 'form')
    bindState('input', windowWidth, 'width')
    bindState('input', windowHeight, 'height')
    bindState('change', windowType, 'type')
    bindState('change', windowProfile, 'profile')
}

export default changeModalState
