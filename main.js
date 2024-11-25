const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } 
        // Put else entry.target.classList.remove('show'); to make it so images dissapear after leaving the screen
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


