main_form.onsubmit = async e => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value
    try {
        const res = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
			headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json()
        if(data.success) {
            location = '/'
        } else {
            error_message.innerText = data.error
        }
        console.log(data)
    } catch(err) {
        console.error(err)
    }
}