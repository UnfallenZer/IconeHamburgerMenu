const btn = document.querySelector('.btn1');                /* On selection l'element */

btn.addEventListener('click', transformation)         /* On lui donne l'evenement et la fonction a lancer */

function transformation(){

    btn.classList.toggle('active')

}