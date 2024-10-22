// Here is the JavaScript solution, uncomment to use the code

// (function (){
//     "use strict";

//     const content = document.querySelectorAll('.box p');
//     const button = document.querySelectorAll('.box img');

//     function closeContent() {
//         for (let i = 0; i < content.length; i++) {
//             content[i].className = 'hide';
//             button[i].src = './assets/images/icon-plus.svg';
//         }
//     }

//     closeContent();

//     for (let i = 0; i < button.length; i++) {
//         button[i].addEventListener('click', function (event) {
//             event.preventDefault();

//             const buttonClicked = this.parentNode.parentNode.querySelector('p');

//             if (buttonClicked.classList.contains('hide')) {
//                 closeContent();
//                 button[i].src = './assets/images/icon-minus.svg';
//                 buttonClicked.className = 'show';
//             }
//             else {
//                 button[i].src = './assets/images/icon-plus.svg';
//                 buttonClicked.className = 'hide';
//             }
//         });
//     }
// })();


// Below is the jQuery solution

$(document).ready(function (){
    $('.box p').hide();

    $('.box img').click(function () {
        const toggleButton = $(this).attr('src', './assets/images/icon-minus.svg');
        const thisMenu = $(this).parent().next('p');
        
        $('.box p').not(thisMenu).hide();
        $('.box img').not(toggleButton).attr('src', './assets/images/icon-plus.svg');
        
        thisMenu.toggle();
    });
});










