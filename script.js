let input = document.querySelector('.entered-list')
let addBtn = document.querySelector('.add-btn')
let tasks = document.querySelector('.tasks')

// add a new task
addBtn.addEventListener('click', () => {
    if(input.value.trim() != 0) {
        let newItem = document.createElement('div')
        newItem.classList.add('item')
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa-solid fa-check"></i>
            <i class="fa-solid fa-xmark"></i>
        </div>
        `
        tasks.appendChild(newItem)
        input.value = ''
    }
    else {
        alert('Enter a task')
    }

})
// delete a task from list
tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove()
    }
})
// mark as complete 
tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-check')) {
        e.target.parentElement.parentElement.classList.toggle('completed')
    }
})
