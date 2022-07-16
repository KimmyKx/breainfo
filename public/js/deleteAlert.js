const deleteBtn = document.querySelectorAll('.delete-confirm-js');
deleteBtn.forEach(btn => {
    btn.onclick = (e) => {
        e.preventDefault()
        const confirmation = confirm('Are you sure you want to delete this item?')
        if(confirmation) {
            loading.style.display = 'flex'
            const formData = new FormData(btn.form)
            const xhr = new XMLHttpRequest()
            xhr.open('POST', btn.href)
            xhr.onload = () => {
                try {
                    const response = JSON.parse(xhr.responseText)
                    if(response.success) {
                        loading.style.display = 'none'
                        location = btn.dataset.target || '/'
                    }
                } catch(err) {
                    alert('An error occurred while deleting')
                    loading.style.display = 'none'
                }
            }
            xhr.send(formData)
        }
    }
})
