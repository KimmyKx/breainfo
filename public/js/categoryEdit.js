const editButtons = document.querySelectorAll('.edit-js');
editButtons.forEach(button => {
    button.onclick = () => {
        createForm(button.parentElement.parentElement.firstElementChild)
    }
})

function createForm(element) {
    element.innerHTML = `
    <form>
        <input type="text" class="bi-input" value="${element.dataset.name}" name="name" autocomplete="off">
        <input type="hidden" value="${element.dataset.name}" name="oldName">
    </form>
    `
    const form = element.querySelector('form')
    form.onsubmit = (e) => {
        e.preventDefault()
        loading.style.display = 'flex'
        const xhr = new XMLHttpRequest()
        xhr.open('POST', '/admin/category/edit')
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onload = () => {
            loading.style.display = 'none'
            try {
                const res = JSON.parse(xhr.responseText)
                if(res.success) {
                    location = '/admin/category/all'
                } else {
                    alert('An error occurred' + res.error)
                }
            } catch(err) {
                alert('An error occurred')
            }
        }
        xhr.send(JSON.stringify({ name: e.target.name.value, oldName: e.target.oldName.value }))
    }
}