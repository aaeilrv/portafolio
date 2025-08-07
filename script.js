const windows = document.querySelectorAll('.secondary_window')

let z = 1

windows.forEach((window) => {

  const title = window.querySelector('.secondary_navbar')

  window.addEventListener('mousedown', () => {
    z = z + 1
    window.style.zIndex = z
  })

  title.addEventListener('mousedown', (event) => {

    let l = window.offsetLeft
    let t = window.offsetTop

    let startX = event.pageX
    let startY = event.pageY

    const drag = (event) => {
      event.preventDefault() // prevent from dragging text

      window.style.top = t + (event.pageY - startY)+ 'px'
      window.style.left = l + (event.pageX - startX) + 'px'
    }

    const mouseUp = () => {
      window.classList.remove("is-dragging")
      document.removeEventListener('mousemove', drag)
    }
    
    document.addEventListener("mouseup", mouseUp)
    document.addEventListener("mousemove", drag)
  })
})