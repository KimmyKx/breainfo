const announcement = document.querySelector('.announcement')
const announcementContent = document.querySelector('.announcement-content')

announcementContent.style.height = announcement.getBoundingClientRect().height * 75/100 + 'px'