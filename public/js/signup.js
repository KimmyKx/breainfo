main_form.onsubmit = async e => {
	e.preventDefault()
	const username = e.target.Username.value
	const password = e.target.Password.value
    
	try {
		const res = await fetch('/signup', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: { 'Content-Type': 'application/json' }
		})
		const data = await res.json()
		if(data.success) {
			location = '/'
		}
	} catch(err) {
		console.log(err)
	}
}