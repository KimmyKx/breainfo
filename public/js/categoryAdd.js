main_form.onsubmit = (e) => {
    e.preventDefault()
    loading.style.display = 'flex'
    const formData = new FormData(main_form)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', '/admin/category/add')
    xhr.onload = () => {
        loading.style.display = 'none'
        try {
            const response = JSON.parse(xhr.responseText)
            if(response.success) {
                location = '/admin/category/all'
            } else {
                error_message.innerText = 'An error occurred'
            }
        } catch(err) {
            error_message.innerText = 'An error occurred'
        }
    }
    xhr.send(formData)
}