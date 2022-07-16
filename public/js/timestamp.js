const timestamps = document.querySelectorAll('.data-timestamp')
timestamps.forEach(timestamp => {
    let date = new Date(Number(timestamp.innerText))
    const [month, day, year] = date.toLocaleDateString().split('/')
    date = new Date()
    date.setMonth(month)
    timestamp.innerHTML = `${day} ${date.toLocaleString('en-US', { month: 'long' })} ${year}`
})