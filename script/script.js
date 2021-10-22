// const chevronBtns = document.querySelectorAll('.collapsible__chevron');
const collapsibleElements = document.querySelectorAll('.collapsible');

collapsibleElements.forEach((collapsibleElement) => {
    collapsibleElement.addEventListener('click', event =>{
        collapsibleElement.classList.toggle('collapsible--expanded');
    });
});
