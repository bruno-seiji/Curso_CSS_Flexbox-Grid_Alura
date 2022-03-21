const menulateral = document.querySelector('.menu-lateral')
const menubutton = document.querySelector('.cabecalho__menu')

menubutton.addEventListener('click', changeclass)

function changeclass() {
  menulateral.classList.toggle('menu-lateral--ativo')
}
