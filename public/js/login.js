main_form.onsubmit = async e => {
    e.preventDefault()
    loading.style.display = 'flex'
    const username = e.target.username.value
    const password = e.target.password.value
    try {
        const res = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
			headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json()
        loading.style.display = 'none'
        if(data.success) {
            location = '/'
        } else {
            error_message.innerText = data.error
        }
        console.log(data)
    } catch(err) {
        loading.style.display = 'none'
        console.error(err)
    }
}