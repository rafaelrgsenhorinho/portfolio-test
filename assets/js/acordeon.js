const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement;
        const isClosed = acordeon.classList.contains('closed')
        
        if (isClosed) {
            acordeon.classList.remove('closed')
        } else {
            acordeon.classList.add('closed')
        }
    })
})