const el = document.getElementById('btn1')


el.addEventListener('mouseover', () => {
    el('btn1').innerText += '!'
})

el.addEventListener('click', () => {
    alert('btn1')
})