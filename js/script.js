window.onload = () => {
  /* dinamic menu js */
  const menuIcon = document.getElementById("menu-icon");

  menuIcon.addEventListener("click", (e) => {
    document.getElementById("navbar").classList.toggle("show");
  })

  /* dinamic carrousel */

  const   imgContainer = document.querySelector('.img-container'),
          opc = document.querySelectorAll('.opc')

  opc.forEach((eachOpc, i) => {
    opc[i].addEventListener('click', () => {
      let position = i

      let operation = position * -10

      imgContainer.style.transform = `translateX(${operation}%)`

      opc.forEach((eachOpc, i) => {
        opc[i].classList.remove('active')
      })
      opc[i].classList.add('active')
    })
  })
};
