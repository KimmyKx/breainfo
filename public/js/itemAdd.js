main_form.onsubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(main_form)
}
const categories = document.querySelector('.categories')

window.onload = () => {
    const categorySelects = categories.querySelectorAll('.cat-select')
    const categoryClose = categories.querySelector('.close')
    categorySelects.forEach(categorySelect => { 
        categorySelect.onclick = () => {
            categorySelect.remove()
            const { name, id } = categorySelect.dataset
            category_holder.innerHTML += `
            <div class="cat bi-bg-alt bi-shadow" data-name="${name}" data-id="${id}">
                ${name} <i class="fas fa-xmark" data-name="${name}" data-id="${id}"></i>
                <input type="hidden" name="category[]" value="${id}"> 
            </div>
            `
        }
    })
    categoryClose.onclick = () => {
        categories.parentElement.style.display = 'none'
    }
}

const selectedCategories = document.querySelectorAll('.cat')

selectedCategories.forEach(category => {
    category.onclick = () => {
        category.remove()
    }
})
const addCategory = document.querySelector('.add-category')

addCategory.onclick = () => {
    categories.parentElement.style.display = 'flex'
}


category_holder.onclick = (e) => {
    const name = e.target.dataset.name
    const id = e.target.dataset.id
    if(e.target.classList.contains('cat')) {
        e.target.remove()
        returnCategory(name, id)
    } else if(e.target.tagName == 'I') {
        e.target.parentElement.remove()
        returnCategory(name, id)
    }
}



function returnCategory(name, id) {
    categories.innerHTML += `
    <div class="cat-select bi-bg-alt bi-btn bi-shadow" data-name="${name}" data-id="${id}">${name} <i class="fas fa-plus"></i></div>
    `
    window.onload()
}