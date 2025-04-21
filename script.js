const heading = document.getElementById('heading');
const copyIcon = document.getElementById('copy-icon');

heading.addEventListener('hover', () => {
    heading.style.color = 'green';
})

window.addEventListener('load', () => {
    window.alert("You are browsing");
});

copyIcon.addEventListener('click', () => {
    navigator.clipboard.writeText(heading.textContent);
    copyIcon.classList.remove('fa-light');
    copyIcon.classList.add('fa-solid');

    setTimeout(() => {
        copyIcon.classList.remove('fa-solid');
        copyIcon.classList.add('fa-light');
    })
})
