

const input = document.getElementById('input')
const button = document.getElementById('button')

button.onclick = () => {
    const div = document.createElement('div')
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete'
    const changeButton = document.createElement('button')
    changeButton.innerText = 'change'
    const newtext = document.createElement('newtext')
    div.setAttribute('class', 'block')
    newtext.innerText = input.value

    div.append(newtext)

    div.append(deleteButton, changeButton)
    document.body.append(div)
    deleteButton.onclick = () =>{
        div.remove()
    }

    changeButton.onclick = () => {
        const text = prompt('change')
        newtext.innerText = text
    }
}
