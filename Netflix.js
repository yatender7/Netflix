// FAQ's code

let accordions = document.querySelectorAll('.faq__faq_box');

accordions.forEach((accordion) => {

    let icon = accordion.querySelector('.icon');
    let answer = accordion.querySelector('.faq_box__answer');

    accordion.addEventListener('click', () => {
        console.log(icon);

        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.display = "none"
        } else {
            icon.classList.add('active');
            answer.style.display = "block"
        }
    })
})