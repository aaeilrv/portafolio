const windows = document.querySelectorAll('.secondary_window')
const about_window = document.querySelector('#about')
const contact_window = document.querySelector('#contact')

let z = 1

// open and close windows
function window_visibility_handling(window, open) {
  const display = open ? "block" : "none"
  return window.style.display = display
}

document.querySelector("#about_button_open").addEventListener("click", () => {
  window_visibility_handling(about_window, true)
});

document.querySelector("#contact_button_open").addEventListener("click", () => {
  window_visibility_handling(contact_window, true)
});

document.querySelector("#about_close").addEventListener("click", () => {
  window_visibility_handling(about_window, false)
});

document.querySelector("#contact_close").addEventListener("click", () => {
  window_visibility_handling(contact_window, false)
});


// move windows
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